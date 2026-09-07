import { prisma } from "@/lib/prisma";
import { MarkReadButton } from "@/components/admin/MarkReadButton";

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="eyebrow mb-3">Admin</div>
        <h1 className="mb-10 font-display text-4xl font-semibold text-terra">Messages</h1>

        <div className="flex flex-col gap-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`border p-6 ${m.readAt ? "border-terra/15 bg-terra/5" : "border-turmeric/40 bg-turmeric/10"}`}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="font-display text-xl font-semibold text-terra">{m.subject}</div>
                <span className="text-[13px] font-medium text-umber">
                  {m.createdAt.toDateString()}
                </span>
              </div>
              <div className="mb-3 text-[13px] font-semibold text-umber">
                {m.name} · {m.email}
              </div>
              <p className="mb-4 text-base font-medium text-ink">{m.message}</p>
              {!m.readAt ? <MarkReadButton messageId={m.id} /> : null}
            </div>
          ))}
          {messages.length === 0 ? (
            <p className="text-center text-umber">No messages yet.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
