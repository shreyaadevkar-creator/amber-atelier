import Link from "next/link";
import { requireUser } from "@/lib/session";
import { logoutAction } from "@/app/(auth)/actions";
import { Wordmark } from "@/components/brand/Wordmark";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();

  return (
    <>
      <header className="border-b border-terra/15 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/dashboard">
            <Wordmark symbolSize={22} />
          </Link>
          <nav className="flex items-center gap-8 text-[13px] uppercase tracking-[0.2em] text-terra">
            <span className="text-umber">{user.name}</span>
            <form action={logoutAction}>
              <button type="submit" className="hover:text-vetiver">
                Log Out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
