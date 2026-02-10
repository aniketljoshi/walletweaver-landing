import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function FloatingNavbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up or near top
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMobileOpen(false);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 inset-x-0 z-[100] mx-auto max-w-3xl px-4"
        >
          <div
            className={`relative rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-void-deep/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                : 'bg-void-deep/40 backdrop-blur-md border border-white/[0.05]'
            }`}
          >
            <div className="flex items-center justify-between h-12 px-4 sm:px-6">
              {/* Logo — scaled-down version of Navbar pattern */}
              <Link to="/" className="flex items-center gap-2 group relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="relative flex items-center justify-center w-8 h-8"
                >
                  <img
                    src="/favicon.svg"
                    alt="WalletWeaver Logo"
                    className="w-6 h-6 object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-electric-cyan/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
                <span className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors duration-300">
                  Wallet<span className="gradient-text">Weaver</span>
                </span>
              </Link>

              {/* Desktop Nav Items */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-electric-cyan transition-colors duration-200 rounded-full hover:bg-white/[0.04]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-electric-cyan/20 to-quantum-purple/20 border border-electric-cyan/40 rounded-full hover:border-electric-cyan/60 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300"
                >
                  Join Waitlist
                </motion.button>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-1.5 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile Dropdown Panel */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden md:hidden border-t border-white/[0.06]"
                >
                  <div className="px-4 py-3 space-y-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="block py-2.5 px-3 text-sm font-medium text-slate-300 hover:text-electric-cyan rounded-lg hover:bg-white/[0.04] transition-all duration-200"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="pt-2"
                    >
                      <button className="w-full py-2.5 text-sm text-center font-semibold text-white bg-gradient-to-r from-electric-cyan/20 to-quantum-purple/20 border border-electric-cyan/40 rounded-full hover:border-electric-cyan/60 transition-all duration-300">
                        Join Waitlist
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
