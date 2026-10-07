import RequireAuth from "@/components/ui/RequireAuth";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>;
}
