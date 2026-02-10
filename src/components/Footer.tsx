import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';

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
      <GridBackground>
        {/* Top gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-14">
            {/* Brand column */}
            <div className="sm:col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-3 group relative mb-5">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="relative flex items-center justify-center w-10 h-10"
                >
                  <img
                    src="/favicon.svg"
                    alt="WalletWeaver Logo"
                    className="w-8 h-8 object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-electric-cyan/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
                <span className="text-lg font-bold text-white group-hover:text-electric-cyan transition-colors duration-300">
                  Wallet<span className="gradient-text">Weaver</span>
                </span>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                See The On-Chain Story Behind Every Wallet
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="p-2.5 glass-card rounded-xl text-slate-400 hover:text-white hover:bg-electric-cyan/10 hover:border-electric-cyan/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="text-sm text-slate-400 hover:text-electric-cyan transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                Developers
              </h4>
              <ul className="space-y-3">
                {footerLinks.developers.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="text-sm text-slate-400 hover:text-electric-cyan transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="text-sm text-slate-400 hover:text-electric-cyan transition-colors inline-flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="w-3.5 h-3.5" />}
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} WalletWeaver. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: '#00e5ff' }}
                  className="hover:text-electric-cyan transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </GridBackground>
    </footer>
  );
}
