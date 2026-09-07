import Link from "next/link";
import { requireAdmin } from "@/lib/session";
import { logoutAction } from "@/app/(auth)/actions";
import { Wordmark } from "@/components/brand/Wordmark";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <>
      <header className="border-b border-terra/15 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/admin">
              <Wordmark symbolSize={20} />
            </Link>
            <nav className="flex items-center gap-6 text-[13px] uppercase tracking-[0.2em] text-terra">
              <Link href="/admin" className="hover:text-vetiver">
                Dashboard
              </Link>
              <Link href="/admin/students" className="hover:text-vetiver">
                Students
              </Link>
              <Link href="/admin/courses" className="hover:text-vetiver">
                Courses
              </Link>
              <Link href="/admin/messages" className="hover:text-vetiver">
                Messages
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-6 text-[13px] uppercase tracking-[0.2em]">
            <span className="text-umber">{admin.name} · Admin</span>
            <form action={logoutAction}>
              <button type="submit" className="text-terra hover:text-vetiver">
                Log Out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
