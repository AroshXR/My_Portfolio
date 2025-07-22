import React from 'react';
import { motion } from 'framer-motion';
import tunesSquredCircle from '/src/assets/tunes squred-circle.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-950 via-fuchsia-950 to-blue-950 w-screen mt-25 text-amber-50 border-t-4 border-blue-700">
      <div className="mx-auto px-6 py-12 max-w-7xl">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo/Name section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-mono tracking-wider">
              &lt;aroshtunes_06/&gt;
            </h3>
            <p className="text-amber-100 text-sm">
              Crafting digital experiences with a retro touch.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1"
          >
            <h4 className="text-lg font-bold text-amber-300 mb-4 font-mono">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1"
          >
            <h4 className="text-lg font-bold text-amber-300 mb-4 font-mono">CONNECT</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/AroshXR" className="w-10 h-10 rounded-full bg-amber-700 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <span className="sr-only">GitHub</span>
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="www.linkedin.com/in/aroshana-sandeep-96463623b" className="w-10 h-10 rounded-full bg-amber-700 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://www.instagram.com/aroshtunes_06/" className="w-10 h-10 rounded-full bg-amber-700 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 cursor-pointer"
            onClick={() => window.open('https://lnk.bio/aroshtunes_06', '_blank')}
          >
            <motion.img
              className="w-32 h-32 mx-auto rounded-full border-4 border-[#d48d0b]"
              src={tunesSquredCircle}
              alt="logo"
              initial={{ borderColor: '#d48d0b' }}
              whileHover={{
                borderColor: '#ffd700',
                boxShadow: '0 0 15px #ffd700',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Copyright section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-amber-900 mt-12 pt-8 text-center"
        >
          <p className="text-amber-200 text-sm">
            © {new Date().getFullYear()} aroshtunes_06. All Rights Reserved. | Designed with ♥
          </p>
          <p className="text-xs text-amber-300 mt-2 font-mono">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;