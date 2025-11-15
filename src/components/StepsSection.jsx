import { motion } from 'framer-motion';
import { Camera, Sparkles, FileText } from 'lucide-react';

/**
 * StepsSection Component - 3-step timeline showing how it works
 */
export default function StepsSection() {
  const steps = [
    {
      number: '1',
      icon: Camera,
      title: 'Take a photo of your receipt',
      description: 'Use your phone camera or upload an image. Our AI handles the rest.',
      color: 'bg-blue-500',
    },
    {
      number: '2',
      icon: Sparkles,
      title: 'Let HelloCheck AI analyze your groceries',
      description: 'We extract products, fetch nutrition data, and calculate your health score.',
      color: 'bg-green-500',
    },
    {
      number: '3',
      icon: FileText,
      title: 'Get your personalized nutrition report',
      description: 'See insights, get tips, and track your progress over time.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="steps" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to better nutrition insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative items-stretch">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative z-10 flex"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center w-full flex flex-col">
                {/* Step Number */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg flex-shrink-0`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center flex-shrink-0">
                  <step.icon size={48} className="text-gray-700" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

