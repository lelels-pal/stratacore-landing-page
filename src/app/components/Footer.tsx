import { Zap, Mail } from 'lucide-react';
import { ScrollReveal } from './animations/ScrollReveal';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onContact: () => void;
}

export function Footer({ onNavigateToSection, onContact }: FooterProps) {
  return (
    <footer className="relative border-t border-white/8 px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-5 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-600">
                  <Zap className="size-6 text-white" fill="white" />
                </div>
                <span className="text-xl font-semibold tracking-tight">Stratacore</span>
              </div>
              <p className="max-w-md leading-relaxed text-white/50">
                Enterprise-grade EV charging infrastructure software that powers
                reliable networks and better driver experiences.
              </p>
              <a
                href="mailto:stratacoreceo@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-violet-300 transition-colors hover:text-violet-200"
              >
                <Mail className="size-4" />
                stratacoreceo@gmail.com
              </a>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('features')}
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('solutions')}
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('benefits')}
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    Benefits
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={onContact}
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Stratacore. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
