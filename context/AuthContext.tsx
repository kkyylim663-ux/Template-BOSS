"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { MOCK_USER } from "@/lib/mock/user";

interface AuthUser {
  username: string;
  phone: string;
  email: string;
  fullName: string;
  birthdate: string;
  currency: string;
  balance: number;
  promotionBalance: number;
  turnover: number;
  turnoverRequired: number;
  points: number;
  vipLevel: string;
  messages: number;
  referralCode: string;
  referralUrl: string;
}

interface AuthCtx {
  user: AuthUser | null;
  ready: boolean;
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshBalance: () => void;
}

const AuthContext = createContext<AuthCtx | null>(null);

const STORAGE_KEY = "bo55_auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  const login = async (username: string, _password: string): Promise<boolean> => {
    // mock: any non-empty creds succeed
    if (!username.trim()) return false;
    const u: AuthUser = { ...MOCK_USER, username: username || MOCK_USER.username };
    setUser(u);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(u)); } catch {}
    return true;
  };

  const logout = () => {
    setUser(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const refreshBalance = () => {
    if (!user) return;
    // mock: keep same, just trigger re-render
    setUser({ ...user });
  };

  return (
    <AuthContext.Provider value={{ user, ready, isLoggedIn: !!user, login, logout, refreshBalance }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
