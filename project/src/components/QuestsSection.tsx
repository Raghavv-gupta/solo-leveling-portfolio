import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/personalData';

const QuestsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
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

  const openProject = (index: number) => {
    setSelectedProject(index);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="quests" className="sl-section">
      <div className="sl-container">
        <motion.h2
          className="sl-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="sl-teal-glow-text">Completed Quests</span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="cursor-pointer group"
              variants={itemVariants}
              onClick={() => openProject(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="sl-card h-full relative overflow-hidden">
                {project.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-sl-dark via-sl-dark/90 to-sl-dark/20 z-10" />
                )}
                
                {project.image && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                    />
                  </div>
                )}
                
                <div className="relative z-20">
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span className="text-xs text-gray-400">QUEST COMPLETED</span>
                  </div>
                  
                  <h3 className="font-orbitron text-xl text-white mb-2 group-hover:text-sl-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-md bg-sl-blue-800/30 text-sl-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/80" onClick={closeProject} />
              
              <motion.div
                className="bg-sl-dark border-2 border-sl-blue-700/50 rounded-lg shadow-sl-glow overflow-hidden w-full max-w-4xl relative z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center border-b border-sl-blue-700/30 p-4">
                  <h3 className="font-orbitron text-xl text-white">
                    {projects[selectedProject].title}
                  </h3>
                  <button 
                    onClick={closeProject}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6">
                  {projects[selectedProject].image && (
                    <div className="w-full h-48 md:h-64 mb-6 relative overflow-hidden rounded-lg border border-sl-blue-700/30">
                      <img 
                        src={projects[selectedProject].image} 
                        alt={projects[selectedProject].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-300 mb-6">
                    {projects[selectedProject].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-orbitron text-sl-blue-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-sm px-3 py-1 rounded-md bg-sl-blue-800/30 text-sl-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {projects[selectedProject].link && (
                    <a
                      href={projects[selectedProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sl-button inline-flex items-center"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuestsSection;