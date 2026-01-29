import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Demo', href: '/demo', isRoute: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-glass-border'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10">
                <img src="/favicon.svg" alt="WalletWeaver Logo" className="w-8 h-8 object-contain" />
                <div className="absolute inset-0 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </div>
              <span className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                Wallet<span className="gradient-text">Weaver</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ y: -2 }}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-slate-400 hover:text-neon-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm font-medium text-slate-400 hover:text-neon-cyan transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/30 rounded-xl hover:border-neon-cyan/50 transition-colors btn-glow"
              >
                Join Waitlist
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-void/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative pt-20 px-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-lg font-medium text-slate-300 hover:text-neon-cyan transition-colors border-b border-glass-border"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block py-3 text-lg font-medium text-slate-300 hover:text-neon-cyan transition-colors border-b border-glass-border"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <button className="w-full py-3 text-center font-medium text-white bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/30 rounded-xl">
                    Join Waitlist
                  </button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
