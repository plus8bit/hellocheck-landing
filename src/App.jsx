import HeroSection from "./components/HeroSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import StepsSection from "./components/StepsSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import PrivacyPage from "./components/PrivacyPage.jsx";
import TermsPage from "./components/TermsPage.jsx";

function App() {
  const path = window.location.pathname;

  if (path.startsWith("/privacy")) {
    return <PrivacyPage />;
  }

  if (path.startsWith("/terms")) {
    return <TermsPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
