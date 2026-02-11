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
    { label: 'Contact', href: 'mailto:contact@walletweaver.com', icon: Mail },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/WalletWeaverHQ', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/walletweaver', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/walletweaver', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-void">
      {/* Background */}
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 grid-overlay opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-quantum-purple/5 blur-[100px] rounded-full" />
      <div className="absolute -left-40 top-0 w-80 h-80 bg-electric-cyan/5 blur-[80px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group relative">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="relative flex items-center justify-center w-10 h-10"
                >
                  <img src="/favicon.svg" alt="WalletWeaver Logo" className="w-8 h-8 object-contain relative z-10" />
                  <div className="absolute inset-0 bg-electric-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </motion.div>
                <span className="text-xl font-bold text-white group-hover:text-electric-cyan transition-colors duration-300">
                  Wallet<span className="gradient-text">Weaver</span>
                </span>
              </Link>
              <p className="text-base text-slate-400 mb-8 leading-relaxed">
                See The On-Chain Story <br />Behind Every Wallet
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-3 glass-card rounded-xl text-slate-400 hover:text-white hover:bg-electric-cyan/10 hover:border-electric-cyan/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-base text-slate-400 hover:text-electric-cyan transition-colors inline-block font-medium"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Developers</h4>
              <ul className="space-y-4">
                {footerLinks.developers.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-base text-slate-400 hover:text-electric-cyan transition-colors inline-block font-medium"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-base text-slate-400 hover:text-electric-cyan transition-colors inline-flex items-center gap-2 font-medium"
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
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-slate-500 font-medium">
              © {new Date().getFullYear()} WalletWeaver. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
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
        </AnimatedSection>
      </div>
    </footer>
  );
}
