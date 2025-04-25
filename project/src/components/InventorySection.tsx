import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/personalData';
import * as LucideIcons from 'lucide-react';

const InventorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
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

  // This function retrieves a Lucide icon component by name
  const getIconByName = (name: string) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.Code;
    return <IconComponent size={24} />;
  };

  // Get color class based on rarity
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return 'text-orange-500';
      case 'epic':
        return 'text-purple-500';
      case 'rare':
        return 'text-blue-500';
      case 'uncommon':
        return 'text-teal-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <section id="inventory" className="sl-section bg-sl-darker">
      <div className="sl-container">
        <motion.h2
          className="sl-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="sl-blue-glow-text">Inventory</span>
        </motion.h2>

        <div className="mb-6 flex justify-center">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
              <span className="text-sm text-gray-300">Legendary</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
              <span className="text-sm text-gray-300">Epic</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-sm text-gray-300">Rare</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
              <span className="text-sm text-gray-300">Uncommon</span>
            </div>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              className={`sl-card h-full rarity-${item.rarity}`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className={`mr-3 ${getRarityColor(item.rarity)}`}>
                    {getIconByName(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-orbitron text-lg text-white">{item.name}</h3>
                    <span className="text-xs text-gray-400 capitalize">{item.rarity}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InventorySection;