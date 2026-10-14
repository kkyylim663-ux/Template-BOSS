import RequireAuth from "@/components/ui/RequireAuth";
import AccountTabs from "@/components/account/AccountTabs";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <AccountTabs />
      {children}
    </RequireAuth>
  );
}
