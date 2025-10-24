import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Lock } from 'lucide-react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6">
            <Lock className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-400">Limited Slots Available</span>
          </div>

          <h2 className="mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Join 2,000+ Profitable Traders Today
          </h2>
          
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Stop guessing. Start profiting. Elite signals, expert analysis, and a community that wins together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 px-8 py-6 text-lg"
            >
              Access the Vault Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-zinc-500 mt-6">
            30-day money-back guarantee · No questions asked
          </p>
        </motion.div>
      </div>
    </section>
  );
}
