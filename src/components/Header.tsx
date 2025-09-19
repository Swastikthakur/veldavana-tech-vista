import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoWhite from '@/assets/white-icon.png';
import logoBlue from '@/assets/blue-icon.png';

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
  
  const scrollToSection = (href: string, isPage: boolean = false) => {
    if (isPage) {
      // For page navigation, navigate first then scroll to top
      window.location.href = href;
      // Add a small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 60; // Further reduced header height
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border/20' 
          : 'bg-brand-primary/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-full mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20">
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
              className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href, item.href.startsWith('/'));
                }}
                className={`transition-all duration-300 relative group font-medium text-base lg:text-lg xl:text-xl inline-block py-2 ${
                  isScrolled 
                    ? 'text-brand-primary hover:text-brand-accent' 
                    : 'text-brand-secondary hover:text-brand-secondary/80'
                } cursor-pointer`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item.name}
                <span className={`absolute bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-primary' : 'bg-brand-secondary'
                }`}></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              variant="default" 
              className={`font-bold px-4 lg:px-6 xl:px-8 py-3 lg:py-4 text-sm lg:text-base xl:text-lg rounded-xl transition-all duration-300 hover:shadow-xl ${
                isScrolled
                  ? 'bg-brand-primary hover:bg-brand-accent text-brand-secondary'
                  : 'bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary'
              }`}
              onClick={() => scrollToSection('#services')}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled 
                ? 'text-brand-primary hover:text-brand-accent' 
                : 'text-brand-secondary hover:text-brand-secondary/80'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="xs:w-7 xs:h-7 sm:w-8 sm:h-8" /> : <Menu size={24} className="xs:w-7 xs:h-7 sm:w-8 sm:h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md shadow-lg border-t ${
                isScrolled 
                  ? 'bg-background/95 border-border/20' 
                  : 'bg-brand-primary/95 border-brand-secondary/20'
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4 xs:space-y-5 sm:space-y-6 p-4 xs:p-5 sm:p-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-300 py-3 xs:py-4 block font-medium text-lg xs:text-xl sm:text-2xl ${
                      isScrolled 
                        ? 'text-brand-primary hover:text-brand-accent' 
                        : 'text-brand-secondary hover:text-brand-secondary/80'
                    } cursor-pointer`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      // Add small delay to ensure menu closes before scrolling
                      setTimeout(() => {
                        scrollToSection(item.href, item.href.startsWith('/'));
                      }, 300);
                    }}
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
                    className={`w-full font-bold py-4 xs:py-5 text-lg xs:text-xl sm:text-2xl rounded-xl transition-all duration-300 ${
                      isScrolled
                        ? 'bg-brand-primary hover:bg-brand-accent text-brand-secondary'
                        : 'bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary'
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      // Add small delay to ensure menu closes before scrolling
                      setTimeout(() => {
                        scrollToSection('#services');
                      }, 300);
                    }}
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