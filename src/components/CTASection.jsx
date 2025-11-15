import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * CTASection Component - Call-to-action section with signup button
 */
export default function CTASection() {
  const handleCTAClick = () => {
    // In a real app, this would navigate to the app or open a signup modal
    // For now, scroll to top or you can change this to navigate to your app
    window.location.href = '/app'; // Link to the actual HelloCheck app
  };

  const benefits = [
    'Works on iPhone, Android, and Desktop',
    'No install required',
    '100% Free',
    'Privacy-first',
  ];

  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-primary to-blue-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Start your journey to smarter, healthier shopping.
          </h2>

          <motion.a
            href="https://t.me/HelloCheckAppBot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors flex items-center gap-3 shadow-2xl mx-auto inline-flex"
          >
            Try HelloCheck Free
            <ArrowRight size={24} />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-8"
          >
            <p className="text-blue-100 text-lg mb-6">
              Works on iPhone, Android, and Desktop — no install required.
            </p>

            {/* Benefits List - Flexbox for consistent spacing */}
            {/* Mobile: vertical stack with even spacing, Desktop: horizontal row with equal gaps */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:gap-x-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center gap-2 text-white/90 text-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="text-green-300 flex-shrink-0 w-[18px] h-[18px]"
                  />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

