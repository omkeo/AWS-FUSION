import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAws, FaLinux, FaCogs, FaShieldAlt } from 'react-icons/fa';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'AWS Cloud', percentage: 95, icon: FaAws, color: 'from-orange-500 to-orange-600' },
    { name: 'Linux Administration', percentage: 90, icon: FaLinux, color: 'from-blue-500 to-blue-600' },
    { name: 'DevOps', percentage: 85, icon: FaCogs, color: 'from-green-500 to-green-600' },
    { name: 'Cloud Security', percentage: 88, icon: FaShieldAlt, color: 'from-red-500 to-red-600' },
  ];

  const milestones = [
    { year: 'April', title: 'AWS Fusion Founded', description: 'Started our journey in cloud education' },
    { year: 'May', title: '100+ Students', description: 'Reached our first major milestone' },
    { year: 'June', title: 'Corporate Training', description: 'Expanded to enterprise solutions' },
    { year: 'July', title: 'AWS Partnership', description: 'Became AWS Training Partner' },
    { year: 'August', title: '500+ Graduates', description: 'Celebrating continued growth' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About AWS Fusion
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AWS Fusion is a leading training and consulting company specializing in Cloud Computing, 
            AWS Solutions, and Linux system administration. Our mission is to empower businesses and 
            individuals with the skills to thrive in the digital era.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center mb-3">
                    <skill.icon className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Journey 2025</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '500+', label: 'Students Trained', icon: '👨‍🎓' },
            { number: '50+', label: 'AWS Projects', icon: '☁️' },
            { number: '98%', label: 'Success Rate', icon: '📈' },
            { number: '24/7', label: 'Support', icon: '🛟' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <motion.div
                className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;