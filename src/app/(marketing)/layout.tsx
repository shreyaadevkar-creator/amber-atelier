import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-terra/15 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/">
            <Wordmark symbolSize={22} />
          </Link>
          <nav className="flex items-center gap-8 text-[13px] uppercase tracking-[0.2em] text-terra">
            <Link href="/courses" className="hover:text-vetiver">
              Courses
            </Link>
            <Link href="/about" className="hover:text-vetiver">
              About
            </Link>
            <Link href="/contact" className="hover:text-vetiver">
              Contact
            </Link>
            <Link href="/login" className="hover:text-vetiver">
              Log In
            </Link>
            <Link
              href="/register"
              className="border border-terra/40 px-4 py-2 hover:bg-vetiver/10 hover:border-vetiver"
            >
              Begin
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-terra/15 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <Wordmark variant="stacked" symbolSize={20} />
          <p className="font-display text-base italic text-umber">
            Once resin. Now gold. Forever light.
          </p>
          <p className="text-[12px] uppercase tracking-[0.25em] text-umber/70">
            Amber Global Private Limited · Est. 2026 · India
          </p>
          <div className="mt-2 flex items-center gap-6 text-[12px] uppercase tracking-[0.2em] text-terra">
            <Link href="/about" className="hover:text-vetiver">
              About
            </Link>
            <Link href="/contact" className="hover:text-vetiver">
              Contact
            </Link>
            <Link href="/terms" className="hover:text-vetiver">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-vetiver">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
