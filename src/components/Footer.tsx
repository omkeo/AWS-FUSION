import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaLinkedin, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'AWS Cloud Solutions', href: '#services' },
        { name: 'Linux Administration', href: '#services' },
        { name: 'Cloud Security', href: '#services' },
        { name: 'DevOps Consulting', href: '#services' }
      ]
    },
    {
      title: 'Training',
      links: [
        { name: 'AWS Certification', href: '#services' },
        { name: 'Linux Professional', href: '#services' },
        { name: 'Corporate Training', href: '#services' },
        { name: 'Workshops', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: '#', color: 'hover:text-gray-600' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-600' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaCloud className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AWS Fusion</span>
              </motion.div>
              
              <motion.p
                className="text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Empowering businesses and individuals with comprehensive AWS and Linux training solutions.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3">
                  <FiMail className="text-blue-400" />
                  <span className="text-gray-400">awsfusion.cloud@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-blue-400" />
                  <span className="text-gray-400">+91 7030142809</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-blue-400" />
                  <span className="text-gray-400">Maharashtra Pune</span>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
              >
                <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest AWS updates and training opportunities.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} AWS Fusion. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;