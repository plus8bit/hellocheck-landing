// landing/src/components/PrivacyPage.jsx

export default function PrivacyPage() {
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
        <h1>Privacy Policy</h1>
        <p>Last updated: 15 November 2025</p>

        <p>
          HelloCheck (“we”, “us”, “our”) provides tools that help you understand
          the nutritional quality of your grocery purchases. This Privacy Policy
          explains how we collect, use, and protect your information when you
          use our website, Telegram bot, or other services (the “Service”).
        </p>

        <h2>1. Data we collect</h2>
        <ul>
          <li>
            <strong>Receipt content:</strong> photos of grocery receipts and the
            extracted list of products.
          </li>
          <li>
            <strong>Usage data:</strong> dates of analysis, language
            preferences, approximate number of receipts per month.
          </li>
          <li>
            <strong>Telegram data:</strong> your Telegram user ID and username,
            which are required to operate the bot and save your history.
          </li>
          <li>
            <strong>Technical data:</strong> IP address, browser type and basic
            analytics collected by our hosting and analytics providers.
          </li>
        </ul>

        <h2>2. How we use your data</h2>
        <ul>
          <li>analyze receipts and generate nutrition insights,</li>
          <li>show your previous receipt history,</li>
          <li>improve the quality of our models and prompts,</li>
          <li>protect the Service from abuse and technical issues.</li>
        </ul>

        <h2>3. Use of AI and third-party providers</h2>
        <p>
          For receipt recognition and nutrition analysis we may send receipt
          text or images to third-party AI providers such as OpenAI / OpenRouter
          or similar services. These providers process the data to generate
          responses but do not use it to identify you personally.
        </p>

        <h2>4. Data retention</h2>
        <p>
          We keep receipt history only as long as it is necessary to provide the
          Service. You can request deletion of your data by contacting us.
        </p>

        <h2>5. Cookies and analytics</h2>
        <p>
          Our website may use cookies or similar technologies for basic usage
          analytics and to improve performance.
        </p>

        <h2>6. Children&apos;s privacy</h2>
        <p>
          HelloCheck is not directed to children under 13 and we do not
          knowingly collect personal data from children.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Depending on your location, you may have the right to access, update,
          or delete your personal data. To exercise these rights, please contact
          us.
        </p>

        <h2>8. Contact</h2>
        <p>
          <strong>Email:</strong> hello@hellocheck.app
        </p>

        <h2>9. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest
          version will always be available on this page.
        </p>
      </main>
    </div>
  );
}
