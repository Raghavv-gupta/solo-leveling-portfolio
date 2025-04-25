import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BootScreen from './components/BootScreen';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import StatsSection from './components/StatsSection';
import QuestsSection from './components/QuestsSection';
import InventorySection from './components/InventorySection';
import TitlesSection from './components/TitlesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Handle boot screen completion
  const handleBootComplete = () => {
    setLoading(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 500);
  };

  // Handle scrolling to set correct active navigation
  useEffect(() => {
    const handleScroll = () => {
      // You can implement active section highlighting here if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <BootScreen onComplete={handleBootComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {contentVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Header />
            <ProfileSection />
            <StatsSection />
            <QuestsSection />
            <InventorySection />
            <TitlesSection />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;