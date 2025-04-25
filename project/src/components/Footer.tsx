import { Github, Mail, Linkedin } from 'lucide-react';
import { profileData } from '../data/personalData';

const Footer = () => {
  return (
    <footer className="bg-sl-darker py-10 border-t border-sl-blue-800/30">
      <div className="sl-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <h2 className="font-orbitron text-xl font-bold sl-blue-glow-text">{profileData.name}</h2>
              <div className="ml-3 flex items-center">
                <span className="text-xs text-gray-400">LVL</span>
                <span className="ml-1 text-sm sl-teal-glow-text font-semibold">{profileData.level}</span>
              </div>
            </div>
            <p className="text-gray-400 mt-2">{profileData.title}</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Raghavv-gupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sl-blue-800/20 text-white hover:bg-sl-blue-700/40 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:raghavguptaji0@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sl-blue-800/20 text-white hover:bg-sl-blue-700/40 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/raghav-gupta1504/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sl-blue-800/20 text-white hover:bg-sl-blue-700/40 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-sl-blue-800/30 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {profileData.domain} | All rights reserved</p>
          <p className="mt-1">Built with React, Tailwind, and Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;