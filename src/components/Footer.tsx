import { Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ImageWithFallback
                src="https://cdn.discordapp.com/attachments/1399603099814990005/1431188247232647269/CRYPTO_VAULT.png?ex=68fc816c&is=68fb2fec&hm=c3c1c2386ee7f59bfb28640b317f3800695ba7fc8a74aa46405d5e1337dabc53&"
                alt="The Crypto Vault"
                className="h-8 w-auto"
              />
              <span className="text-white">The Crypto Vault</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              Elite trading signals and market intelligence for serious cryptocurrency traders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} The Crypto Vault. All rights reserved.
            </p>
            <p className="text-zinc-600 text-xs max-w-md text-center sm:text-right">
              Trading involves risk. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
