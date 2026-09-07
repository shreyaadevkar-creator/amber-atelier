import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-20">
      <Link href="/" className="mb-12">
        <Wordmark variant="stacked" symbolSize={22} />
      </Link>
      <div className="w-full max-w-sm border border-terra/20 bg-terra/10 p-8">{children}</div>
    </div>
  );
}
