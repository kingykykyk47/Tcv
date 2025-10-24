import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Signal, Bell, Users, TrendingUp, Shield } from 'lucide-react';

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Signal,
      title: 'Premium Signals',
      description: 'Curated trade setups from professional analysts with detailed entry and exit points.',
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications across all devices so you never miss a profitable opportunity.',
    },
    {
      icon: Users,
      title: 'VIP Community',
      description: 'Connect with experienced traders, share insights, and grow together.',
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Daily market reports and macro analysis to keep you ahead of the curve.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Every signal includes stop-loss levels and position sizing recommendations.',
    },
  ];

  return (
    <section id="features" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Everything You Need to Trade Like a Pro
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Comprehensive tools and insights designed for serious traders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm hover:border-violet-800/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-blue-600/0 group-hover:from-violet-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="mb-3 text-white">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
