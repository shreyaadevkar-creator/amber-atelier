export default function TermsPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="eyebrow mb-4">Legal</div>
        <h1 className="mb-2 font-display text-4xl font-semibold text-terra">Terms of Service</h1>
        <p className="mb-10 text-sm font-medium text-umber">
          Last updated: 24 July 2026 · Draft template — review with legal counsel before relying
          on this for a live, paying audience.
        </p>

        <div className="flex flex-col gap-8 text-base font-medium leading-relaxed text-ink">
          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">1. Acceptance</h2>
            <p>
              By creating an account or enrolling in a course through the Amber Atelier, you
              agree to these Terms of Service. If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">2. Enrollment &amp; Pricing</h2>
            <p>
              Course prices are set from the inside out and are not discounted. Once enrolled and
              paid, access to a course&rsquo;s modules is granted for the duration described at
              enrollment. Refund policy: [to be defined by Amber Global Private Limited].
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">3. Certification</h2>
            <p>
              A certificate is issued once a student has completed every module, passed the
              course examination at the required standard, and submitted a portfolio. The Amber
              Certified mark reflects an ongoing standard of conduct, not a one-time credential,
              and may be reviewed by Amber Global Private Limited.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">4. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activity under your account. Notify us promptly of any unauthorized
              use.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">5. Intellectual Property</h2>
            <p>
              All course content, curriculum, branding, and materials are the property of Amber
              Global Private Limited and are provided for personal learning use only. They may
              not be reproduced, resold, or redistributed without written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">6. Limitation of Liability</h2>
            <p>
              Course content is provided for educational purposes. Amber Global Private Limited
              is not liable for outcomes arising from the independent practice of techniques
              taught in this curriculum.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-xl font-semibold text-terra">7. Contact</h2>
            <p>
              Questions about these terms can be sent via the{" "}
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
