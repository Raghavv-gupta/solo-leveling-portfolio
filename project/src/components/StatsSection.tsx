import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/personalData';

const StatsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="stats" className="sl-section bg-sl-darker">
      <div className="sl-container">
        <motion.h2
          className="sl-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="sl-purple-glow-text">Stat Window</span>
        </motion.h2>

        <div ref={ref} className="sl-card">
          {/* Category Tabs */}
          <div className="flex mb-6 border-b border-sl-blue-700/30">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-orbitron text-sm md:text-base transition-all ${
                  selectedCategory === index
                    ? 'text-sl-purple-300 border-b-2 border-sl-purple-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setSelectedCategory(index)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skillCategories[selectedCategory].skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={itemVariants}
                custom={index}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-rajdhani font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className={`font-orbitron text-${skill.color}-400`}>
                    {skill.level}/100
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-${skill.color}-500`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;