import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Header Component - Navigation bar with logo and menu items
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // только секции для скролла
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#steps" },
    { label: "Try the app", href: "#cta" },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openMail = () => {
    // самый прямой способ открыть почтовый клиент
    window.location.href =
      "mailto:hello@hellocheck.app?subject=HelloCheck%20feedback&body=Hi%20HelloCheck%20team,%0D%0A";
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <span className="text-2xl">🧾</span>
            <span className="text-xl font-bold text-gray-900">HelloCheck</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Contact — отдельная кнопка, открывает mailto */}
            <button
              onClick={openMail}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#cta")}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Try HelloCheck →
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Contact в мобильном меню */}
            <button
              onClick={openMail}
              className="block w-full text-left text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection("#cta")}
              className="w-full bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Try HelloCheck →
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
