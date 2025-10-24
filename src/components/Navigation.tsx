import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-black/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src="https://cdn.discordapp.com/attachments/1399603099814990005/1431188247232647269/CRYPTO_VAULT.png?ex=68fc816c&is=68fb2fec&hm=c3c1c2386ee7f59bfb28640b317f3800695ba7fc8a74aa46405d5e1337dabc53&" 
              alt="The Crypto Vault" 
              className="h-24 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-zinc-400 hover:text-white transition-colors">
              Testimonials
            </a>
          </div>

          <Button
            size="sm"
            className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
