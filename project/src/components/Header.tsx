import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profileData } from '../data/personalData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Profile', href: '#profile' },
    { name: 'Stats', href: '#stats' },
    { name: 'Quests', href: '#quests' },
    { name: 'Inventory', href: '#inventory' },
    { name: 'Titles', href: '#titles' },
    { name: 'Guild', href: '#contact' },
  ];

  // Detect scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section with smooth behavior
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-sl-darker/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="sl-container">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-orbitron text-xl md:text-2xl font-bold sl-blue-glow-text">
              {profileData.name}
            </span>
            <div className="ml-3 flex items-center">
              <span className="text-xs text-gray-400">LVL</span>
              <span className="ml-1 text-sm sl-teal-glow-text font-semibold">{profileData.level}</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="px-3 py-2 font-rajdhani text-gray-300 hover:text-white hover:bg-sl-blue-700/20 rounded-md transition-colors"
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-3 px-4 space-y-1 bg-sl-dark/90 backdrop-blur-sm border-t border-sl-blue-700/30">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="block w-full px-3 py-2 font-rajdhani text-left text-gray-300 hover:text-white hover:bg-sl-blue-700/20 rounded-md transition-colors"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;