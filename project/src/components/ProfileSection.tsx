import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Brain, Code } from 'lucide-react';
import { profileData } from '../data/personalData';

const ProfileSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const abilityIcons = {
    'Bug Fixer': <Shield className="w-5 h-5" />,
    'UI Summoner': <Code className="w-5 h-5" />,
    'API Tamer': <Zap className="w-5 h-5" />,
  };

  return (
    <section id="profile" className="sl-section pt-32">
      <div className="sl-container">
        <motion.h2
          className="sl-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="sl-blue-glow-text">Player Profile</span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Character Avatar/Stats Card */}
          <motion.div
            className="md:w-1/3"
            variants={itemVariants}
          >
            <div className="sl-card flex flex-col items-center">
              {/* Character Avatar Placeholder */}
              <div className="w-32 h-32 rounded-full border-4 border-sl-blue-600/50 bg-sl-dark flex items-center justify-center mb-4 overflow-hidden shadow-sl-glow">
                <span className="font-orbitron text-5xl font-bold sl-blue-glow-text">R</span>
              </div>
              
              {/* Character Stats */}
              <h3 className="font-orbitron text-2xl font-bold text-white mb-1">{profileData.name}</h3>
              <p className="text-sl-blue-300 mb-3">
                <span className="font-semibold">{profileData.title}</span>
              </p>
              
              <div className="w-full border-t border-sl-blue-700/50 my-3"></div>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Level</p>
                  <p className="text-2xl font-orbitron sl-teal-glow-text">{profileData.level}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Domain</p>
                  <p className="text-sm font-mono text-sl-purple-300">{profileData.domain}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Character Description/Info */}
          <motion.div
            className="md:w-2/3"
            variants={itemVariants}
          >
            <div className="sl-card h-full">
              <h3 className="sl-card-title text-xl font-semibold flex items-center">
                <Brain className="mr-2 text-sl-purple-400" />
                <span>Character Info</span>
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {profileData.bio}
              </p>
              
              <h4 className="font-orbitron text-sl-blue-300 mb-3">Special Abilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {profileData.abilities.map((ability, index) => (
                  <div 
                    key={index}
                    className="bg-sl-blue-800/20 border border-sl-blue-700/30 rounded-md p-3 flex items-center"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sl-blue-800/50 mr-3 text-sl-blue-200">
                      {abilityIcons[ability as keyof typeof abilityIcons] || <Zap className="w-4 h-4" />}
                    </span>
                    <span className="text-gray-200">{ability}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;