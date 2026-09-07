export default function PrivacyPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="eyebrow mb-4">Legal</div>
        <h1 className="mb-2 font-display text-4xl font-semibold text-terra">Privacy Policy</h1>
        <p className="mb-10 text-sm font-medium text-umber">
          Last updated: 24 July 2026 · Draft template — review with legal counsel (and applicable
          data-protection law, e.g. India&rsquo;s DPDP Act) before relying on this for a live,
          paying audience.
        </p>

        <div className="flex flex-col gap-8 text-base font-medium leading-relaxed text-ink">
          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">
              What we collect
            </h2>
            <p>
              When you register, we collect your name, email address, and a securely hashed
              password. When you enroll, we record which courses you have paid for. As you learn,
              we store your module progress, quiz and exam scores, portfolio submissions, and any
              certificates issued to you. When you write to us, we store your name, email,
              subject, and message.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">
              How we use it
            </h2>
            <p>
              This information is used to run your account, track your progress through a
              course, issue certificates you have earned, respond to your enquiries, and operate
              the Atelier generally. We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">Cookies</h2>
            <p>
              We use a single, essential, httpOnly session cookie to keep you signed in. We do
              not use third-party advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">Payments</h2>
            <p>
              This site currently simulates payment for demonstration purposes. No real card
              details are collected, transmitted, or stored. When live payments are introduced,
              this section will be updated to name the payment processor used.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">Your rights</h2>
            <p>
              You may ask to see, correct, or delete the personal data we hold about you at any
              time via the{" "}
              <a href="/contact" className="text-terra underline">
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
