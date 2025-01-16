
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SocialButton } from './social-button';

export function Footer() {
  return (
    <footer className="bg-black/30 border-t border-purple-500/20 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                your.email@example.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Connect</h3>
            <div className="flex space-x-4">
              <SocialButton icon={Github} href="https://github.com" label="GitHub" />
              <SocialButton icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
              <SocialButton icon={Twitter} href="https://twitter.com" label="Twitter" />
            </div>
          </div>
          <div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}