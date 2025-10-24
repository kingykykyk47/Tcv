import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      text: 'The signal quality is exceptional. I\'ve been consistently profitable for the first time in my trading career. The risk management alone is worth the subscription.',
      role: 'Professional Trader',
    },
    {
      text: 'Finally found a service that delivers real value. The community is knowledgeable, the signals are accurate, and the support team actually knows what they\'re talking about.',
      role: 'Crypto Investor',
    },
    {
      text: 'Transparency and results. No hype, just solid analysis and profitable setups. The Vault has completely changed how I approach the market.',
      role: 'Full-Time Trader',
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Trusted by Elite Traders
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Real results from real traders in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm hover:border-violet-800/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-blue-600/0 group-hover:from-violet-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all" />
                
                <div className="relative">
                  <Quote className="w-10 h-10 text-violet-600/30 mb-4" />
                  <p className="text-zinc-300 mb-6 italic">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-blue-600" />
                    <div>
                      <div className="text-zinc-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
