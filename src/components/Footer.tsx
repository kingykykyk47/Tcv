import { Lock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <Lock className="w-4 h-4 text-white" />
              </div>
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
