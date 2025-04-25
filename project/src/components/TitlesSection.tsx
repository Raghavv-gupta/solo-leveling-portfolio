import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { achievements } from '../data/personalData';

const TitlesSection = () => {
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

  return (
    <section id="titles" className="sl-section">
      <div className="sl-container">
        <motion.h2
          className="sl-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="sl-purple-glow-text">Titles Earned</span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="sl-card relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-sl-purple-500/10 rounded-full blur-xl"></div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-sl-purple-800/30 p-2 rounded-lg shadow-sl-purple-glow">
                  <Award className="text-sl-purple-300" size={24} />
                </div>
                
                <div>
                  <h3 className="font-orbitron text-white text-lg mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {achievement.description}
                  </p>
                  <span className="text-xs text-sl-purple-300 font-mono">
                    {achievement.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TitlesSection;