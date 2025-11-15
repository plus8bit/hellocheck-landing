import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail } from "lucide-react";

/**
 * Footer Component - Footer with links and social icons
 */
export default function Footer() {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#steps" },
      { label: "Try the app", href: "https://t.me/HelloCheckAppBot" },
    ],
    company: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      {
        label: "Contact",
        href: "mailto:hello@hellocheck.app?subject=HelloCheck%20feedback&body=Hi%20HelloCheck%20team,%0D%0A",
      },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/HelloCheckApp", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }, // позже поменяешь
    {
      icon: Mail,
      href: "mailto:hello@hellocheck.app?subject=HelloCheck%20feedback&body=Hi%20HelloCheck%20team,%0D%0A",
      label: "Email",
    },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-2xl">🧾</span>
              <span className="text-xl font-bold text-white">HelloCheck</span>
            </motion.div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI Nutrition Insights from your grocery receipts. Say hello to
              smarter nutrition.
            </p>
            <p className="text-sm text-gray-500 italic">
              "HelloCheck — Say hello to smarter nutrition."
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => {
                const isAnchor = link.href.startsWith("#");

                if (isAnchor) {
                  // якорь → скроллим
                  return (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                }

                // внешняя ссылка (Telegram)
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => {
                const isAnchor = link.href.startsWith("#");

                if (isAnchor) {
                  return (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HelloCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
