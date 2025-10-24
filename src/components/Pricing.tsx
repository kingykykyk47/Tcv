import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: 'Basic',
      price: 49,
      description: 'Perfect for getting started',
      features: [
        'Daily trading signals',
        'Basic market analysis',
        'Community access',
        'Email support',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 97,
      description: 'Most popular choice',
      features: [
        'All Basic features',
        'Real-time alerts',
        'Advanced market analysis',
        'Priority support',
        'Weekly strategy calls',
        'VIP Discord channel',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: 197,
      description: 'Maximum performance',
      features: [
        'All Pro features',
        'Exclusive whale alerts',
        'Personal portfolio review',
        '24/7 dedicated support',
        'Private analyst sessions',
        'Early access to new strategies',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-6">
            Start with confidence. All plans include our 30-day money-back guarantee.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-800/50 bg-green-900/20 text-green-400">
            <Shield className="w-4 h-4" />
            <span className="text-sm">30-Day Money Back Guarantee</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm z-10">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl border ${
                  plan.highlighted
                    ? 'border-violet-600/50 bg-gradient-to-b from-violet-950/20 to-zinc-900/20 shadow-xl shadow-violet-600/10'
                    : 'border-zinc-800/50 bg-zinc-900/20'
                } backdrop-blur-sm transition-all duration-300 hover:border-violet-800/50`}
              >
                <div className="mb-6">
                  <h3 className="mb-2 text-white">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-violet-400" />
                      </div>
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}
