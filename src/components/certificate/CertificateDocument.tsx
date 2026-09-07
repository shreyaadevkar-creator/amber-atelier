import { AmberSymbol } from "@/components/brand/AmberSymbol";

export function CertificateDocument({
  id,
  studentName,
  courseTitle,
  certificateNumber,
  issuedAt,
}: {
  id: string;
  studentName: string;
  courseTitle: string;
  certificateNumber: string;
  issuedAt: Date;
}) {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(issuedAt);

  return (
    <div id={id} className="mx-auto w-[820px] bg-redsoil p-3">
      <div className="border border-gold/50 p-3">
        <div className="flex flex-col items-center gap-8 border border-gold/30 px-16 py-16 text-center">
          <AmberSymbol size={56} tone="ivory" />
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Amber Atelier · Certificate of Completion
          </div>
          <div className="font-display text-sm italic text-champagne/70">
            This is to certify that
          </div>
          <div className="font-display text-4xl font-normal text-champagne">{studentName}</div>
          <div className="font-display text-sm italic text-champagne/70">
            has completed the course
          </div>
          <div className="font-display text-2xl font-light text-gold">{courseTitle}</div>
          <div className="mt-2 h-px w-24 bg-gold/40" />
          <div className="font-display text-sm italic text-champagne/60">
            Once resin. Now gold. Forever light.
          </div>
          <div className="mt-6 flex w-full items-center justify-between text-[10px] uppercase tracking-[0.2em] text-champagne/60">
            <span>Certificate No. {certificateNumber}</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
