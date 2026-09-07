import { ContactForm } from "@/components/marketing/ContactForm";

export default function ContactPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <div className="eyebrow mb-4">Reach the Atelier</div>
          <h1 className="font-display text-4xl font-semibold text-terra">Write to us</h1>
          <p className="mx-auto mt-4 max-w-lg text-base font-medium text-umber">
            For enrollment questions, partnerships, or anything else you would like to ask
            before beginning.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 text-center sm:grid-cols-2">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-umber">Email</div>
            <div className="mt-1 font-display text-xl font-semibold text-terra">
              atelier@amberglobal.in
            </div>
          </div>
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-umber">Location</div>
            <div className="mt-1 font-display text-xl font-semibold text-terra">India</div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
