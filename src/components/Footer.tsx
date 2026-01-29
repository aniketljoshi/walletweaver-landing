import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Status', href: '#' },
  ],
  developers: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'SDKs', href: '#' },
    { label: 'GraphQL Playground', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Contact', href: 'mailto:founders@walletweaver.com', icon: Mail },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/WalletWeaverHQ', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/walletweaver', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/walletweaver', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-void to-void-100" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <img src="/favicon.svg" alt="WalletWeaver Logo" className="w-8 h-8 object-contain" />
                  <div className="absolute inset-0 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </div>
                <span className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                  Wallet<span className="gradient-text">Weaver</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 mb-6">
                The Bloomberg Terminal for On-Chain Intelligence
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 glass-card rounded-lg text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-sm text-slate-400 hover:text-neon-cyan transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="font-semibold text-white mb-4">Developers</h4>
              <ul className="space-y-3">
                {footerLinks.developers.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-sm text-slate-400 hover:text-neon-cyan transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-sm text-slate-400 hover:text-neon-cyan transition-colors inline-flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <AnimatedSection delay={0.2}>
          <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} WalletWeaver. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: '#00f0ff' }}
                  className="hover:text-neon-cyan transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
