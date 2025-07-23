import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoWhite from '@/assets/logo-white.svg';
import logoBlue from '@/assets/logo-blue.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/20' 
          : 'bg-brand-primary/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img
              src={isScrolled ? logoBlue : logoWhite}
              alt="Veldavana Technologies"
              className="h-12 w-auto transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 relative group font-medium ${
                  isScrolled 
                    ? 'text-brand-primary hover:text-brand-accent' 
                    : 'text-brand-secondary hover:text-brand-secondary/80'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-primary' : 'bg-brand-secondary'
                }`}></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              variant="default" 
              className={`font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg ${
                isScrolled
                  ? 'bg-brand-primary hover:bg-brand-accent text-brand-secondary'
                  : 'bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary'
              }`}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled 
                ? 'text-brand-primary hover:text-brand-accent' 
                : 'text-brand-secondary hover:text-brand-secondary/80'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md shadow-lg border-t ${
                isScrolled 
                  ? 'bg-background/95 border-border/20' 
                  : 'bg-brand-primary/95 border-brand-secondary/20'
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4 p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-300 py-3 block font-medium ${
                      isScrolled 
                        ? 'text-brand-primary hover:text-brand-accent' 
                        : 'text-brand-secondary hover:text-brand-secondary/80'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button 
                    variant="default" 
                    className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? 'bg-brand-primary hover:bg-brand-accent text-brand-secondary'
                        : 'bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary'
                    }`}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;