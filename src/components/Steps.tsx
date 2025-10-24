import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { UserPlus, Radio, TrendingUp } from 'lucide-react';

export function Steps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: UserPlus,
      title: 'Join the Vault',
      description: 'Select your plan and get instant access to our exclusive trading community.',
    },
    {
      icon: Radio,
      title: 'Receive Signals',
      description: 'Get real-time trade alerts with complete setup details and risk parameters.',
    },
    {
      icon: TrendingUp,
      title: 'Execute & Profit',
      description: 'Follow the signals, manage your positions, and track your growing portfolio.',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Your Path to Profitable Trading
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Three simple steps to transform your trading results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-violet-600/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-600/20">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-zinc-900 border-2 border-violet-600 flex items-center justify-center">
                      <span className="text-violet-400">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-white">{step.title}</h3>
                  <p className="text-zinc-400 max-w-xs">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
