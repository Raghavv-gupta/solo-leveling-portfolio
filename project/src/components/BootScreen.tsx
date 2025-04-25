import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/personalData';

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const bootTextRef = useRef<HTMLDivElement>(null);

  // Full boot text with Solo Leveling RPG system style
  const bootText = `
[ System Booting... ]

Initializing profile...
Name: ${profileData.name}
Class: ${profileData.title}
Level: ${profileData.level}

Abilities:
${profileData.abilities.map(ability => `- ${ability}`).join('\n')}

System Ready.
Loading interface...
  `.trim();

  // Typing effect
  useEffect(() => {
    if (currentIndex < bootText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + bootText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
        
        // Scroll to bottom as text appears
        if (bootTextRef.current) {
          bootTextRef.current.scrollTop = bootTextRef.current.scrollHeight;
        }
      }, 30); // Adjust speed here
      
      return () => clearTimeout(timeout);
    } else {
      // Transition to main content after typing completes
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, bootText, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-sl-darker flex items-center justify-center z-50"
    >
      <div className="w-full max-w-lg p-8">
        <motion.div 
          className="bg-sl-dark border-2 border-sl-blue-700/50 rounded-md p-6 shadow-sl-glow overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            ref={bootTextRef}
            className="font-mono text-sm md:text-base text-sl-blue-200 whitespace-pre-line h-80 overflow-y-auto custom-scrollbar"
          >
            {displayText}
            {showCursor && <span className="opacity-70">_</span>}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BootScreen;