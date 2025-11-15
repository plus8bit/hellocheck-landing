// landing/src/components/TermsPage.jsx

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧾</span>
            <span className="font-semibold text-lg">HelloCheck</span>
          </div>
          <a
            href="/"
            className="text-sm text-blue-600 hover:text-blue-700 underline"
          >
            ← Back to homepage
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 prose prose-slate">
        <h1>Terms of Use</h1>
        <p>Last updated: 15 November 2025</p>

        <p>
          These Terms of Use (“Terms”) govern your access to and use of
          HelloCheck (the “Service”). By using the website, Telegram bot or any
          related tools, you agree to these Terms.
        </p>

        <h2>1. Service description</h2>
        <p>
          HelloCheck helps you understand the nutritional quality of your
          grocery receipts using AI-powered analysis. The Service is provided
          for information and educational purposes only.
        </p>

        <h2>2. No medical advice</h2>
        <p>
          HelloCheck does not provide medical, dietary or health advice.
          Information we show (calories, scores, tips) is approximate. Always
          consult a qualified healthcare professional before making major
          changes to your diet or lifestyle.
        </p>

        <h2>3. Fair use</h2>
        <ul>
          <li>do not attempt to disrupt or abuse the Service;</li>
          <li>do not reverse engineer our models or prompts;</li>
          <li>
            do not upload illegal content or sensitive personal data unrelated
            to groceries.
          </li>
        </ul>

        <h2>4. Accounts and limits</h2>
        <p>
          When you use the Telegram bot, we identify you by your Telegram user
          ID. Free accounts may have limits on the number of receipts per month.
          We may adjust limits, features or pricing in the future.
        </p>

        <h2>5. Third-party services</h2>
        <p>
          For AI processing and hosting we rely on third-party providers. Your
          use of HelloCheck is also subject to their respective terms and
          policies.
        </p>

        <h2>6. Disclaimer of warranties</h2>
        <p>
          The Service is provided “as is” and “as available”, without warranties
          of any kind. We do not guarantee that the Service will be error-free
          or uninterrupted.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, HelloCheck and its creators
          shall not be liable for any indirect or consequential damages arising
          out of your use of the Service.
        </p>

        <h2>8. Changes to the Service</h2>
        <p>
          We may modify or discontinue any part of the Service at any time,
          including changing free limits or introducing paid plans.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These Terms are governed by the laws of your country of residence,
          unless local law requires otherwise.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these Terms, please contact us:
          <br />
          <strong>Email:</strong> hello@hellocheck.app
        </p>
      </main>
    </div>
  );
}
