import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';

/**
 * HeroSection Component - Main hero section with headline and CTA
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Your groceries tell a story —{" "}
              <span className="text-primary">let AI help you read it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Scan your receipts and instantly see how healthy your shopping
              habits really are. HelloCheck gives you AI-powered nutrition
              insights and simple tips to eat better.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/HelloCheckAppBot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Try HelloCheck Free
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-6 text-sm text-gray-500 pt-4"
            >
              <div className="flex items-center gap-2">
                <Smartphone size={16} />
                <span>No app download needed</span>
              </div>
              <span>•</span>
              <span>100% Free</span>
              <span>•</span>
              <span>Privacy-first</span>
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Phone Frame Mockup */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 space-y-4 min-h-[600px]">
                    {/* Mock Receipt */}
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="space-y-2 text-sm">
                        <div className="font-semibold text-gray-800">
                          GROCERY RECEIPT
                        </div>
                        <div className="text-gray-600">🍎 Apples - $4.99</div>
                        <div className="text-gray-600">🥛 Milk - $3.49</div>
                        <div className="text-gray-600">🍞 Bread - $2.99</div>
                        <div className="text-gray-600">🥬 Spinach - $2.49</div>
                      </div>
                    </div>

                    {/* Mock AI Summary */}
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">💚</span>
                        <span className="font-bold text-gray-800">
                          Health Score: B
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>✓ Good balance of fruits & vegetables</p>
                        <p>⚠️ Consider reducing processed items</p>
                        <p>💡 Try whole grain bread next time</p>
                      </div>
                    </div>

                    {/* Mock Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-2xl font-bold text-primary">
                          1,240
                        </div>
                        <div className="text-xs text-gray-500">Calories</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-2xl font-bold text-accent">A</div>
                        <div className="text-xs text-gray-500">Grade</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-2xl font-bold text-gray-800">
                          4
                        </div>
                        <div className="text-xs text-gray-500">Items</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
