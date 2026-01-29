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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl ${isScrolled
          ? 'glass-card border-electric-cyan/20 shadow-[0_8px_32px_rgba(0,229,255,0.1)] backdrop-blur-2xl'
          : 'bg-void-deep/40 backdrop-blur-md border border-white/5'
          }`}
        >
          <nav className="flex items-center justify-between h-16 lg:h-18 px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="relative flex items-center justify-center w-10 h-10"
              >
                <img src="/favicon.svg" alt="WalletWeaver Logo" className="w-8 h-8 object-contain relative z-10" />
                <div className="absolute inset-0 bg-electric-cyan/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.div>
              <span className="text-lg font-bold text-white group-hover:text-electric-cyan transition-colors duration-300">
                Wallet<span className="gradient-text">Weaver</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-electric-cyan/5"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-electric-cyan/5"
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
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-electric-cyan/20 to-quantum-purple/20 border border-electric-cyan/40 rounded-xl hover:border-electric-cyan/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 btn-glow"
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
            <div className="relative pt-24 px-6">
              <nav className="flex flex-col gap-2">
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
                        className="block py-4 px-4 text-lg font-medium text-slate-200 hover:text-electric-cyan transition-all duration-300 rounded-xl hover:bg-electric-cyan/10 border-b border-white/5"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block py-4 px-4 text-lg font-medium text-slate-200 hover:text-electric-cyan transition-all duration-300 rounded-xl hover:bg-electric-cyan/10 border-b border-white/5"
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
                  <button className="w-full py-4 text-center font-semibold text-white bg-gradient-to-r from-electric-cyan/20 to-quantum-purple/20 border border-electric-cyan/40 rounded-xl hover:border-electric-cyan/60 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
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
