import { PdfExportButton } from "./PdfExportButton";

type Downloadable = {
  id: string;
  tag: string;
  title: string;
  bodyHtml: string;
};

export function DownloadablePack({
  moduleId,
  moduleTitle,
  downloadables,
}: {
  moduleId: string;
  moduleTitle: string;
  downloadables: Downloadable[];
}) {
  if (downloadables.length === 0) return null;

  const targetId = `downloadable-pack-${moduleId}`;

  return (
    <div className="my-8 border border-terra/20 bg-terra/10 p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="eyebrow">Companion Pack</span>
        <PdfExportButton
          targetId={targetId}
          filename={`${moduleTitle.replace(/\s+/g, "-").toLowerCase()}-companion-pack.pdf`}
          label="Download Pack"
        />
      </div>
      <div id={targetId} className="flex flex-col gap-4 bg-white p-2">
        <div className="mb-2 text-center font-display text-lg text-terra">{moduleTitle}</div>
        {downloadables.map((dl) => (
          <div key={dl.id} className="border border-terra/25 bg-white p-5">
            <span className="mb-2 inline-block border border-turmeric/30 bg-turmeric/10 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-turmeric">
              {dl.tag}
            </span>
            <div className="mb-2 font-display text-lg text-terra">{dl.title}</div>
            <div className="amber-body-html" dangerouslySetInnerHTML={{ __html: dl.bodyHtml }} />
          </div>
        ))}
      </div>
    </div>
  );
}
