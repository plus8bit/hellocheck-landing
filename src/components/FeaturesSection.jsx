import { motion } from 'framer-motion';
import { Receipt, Brain, TrendingUp } from 'lucide-react';

/**
 * FeaturesSection Component - Three feature cards with icons
 */
export default function FeaturesSection() {
  const features = [
    {
      icon: Receipt,
      emoji: '🧾',
      title: 'Smart Receipt Scan',
      description: 'Upload or snap a photo of your grocery receipt, AI extracts every product.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Brain,
      emoji: '🍎',
      title: 'AI Nutrition Insights',
      description: 'Instantly see calories, sugar, fat, and get a Health Score (A–E).',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: TrendingUp,
      emoji: '💬',
      title: 'Personal Tips & Trends',
      description: 'Get actionable suggestions and track how your health score improves.',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to{' '}
            <span className="text-primary">eat smarter</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            HelloCheck combines AI technology with nutrition science to give you insights that matter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 text-3xl`}>
                {feature.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

