import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAws, FaLinux, FaShieldAlt, FaCogs, FaGraduationCap, FaUsers } from 'react-icons/fa';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: FaAws,
      title: 'AWS Cloud Solutions',
      description: 'Deploy scalable and secure AWS infrastructures with best practices and cost optimization.',
      features: ['EC2 & Auto Scaling', 'S3 & CloudFront', 'RDS & DynamoDB', 'Lambda & API Gateway'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
    },
    {
      icon: FaLinux,
      title: 'Linux System Administration',
      description: 'Optimize and manage your Linux environments with advanced system administration skills.',
      features: ['Server Configuration', 'Shell Scripting', 'Process Management', 'Network Administration'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
    },
    {
      icon: FaShieldAlt,
      title: 'Cloud Security',
      description: 'Protect your cloud workloads with robust security strategies and compliance frameworks.',
      features: ['IAM & Access Control', 'VPC Security', 'Encryption', 'Compliance Auditing'],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20'
    },
    {
      icon: FaCogs,
      title: 'DevOps Consulting',
      description: 'Implement CI/CD pipelines and Infrastructure as Code with AWS best practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Containerization', 'Monitoring & Logging'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
    },
    {
      icon: FaGraduationCap,
      title: 'Certification Training',
      description: 'Comprehensive training programs to help you ace AWS and Linux certifications.',
      features: ['AWS Solutions Architect', 'AWS DevOps Engineer', 'Linux Professional', 'Hands-on Labs'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
    },
    {
      icon: FaUsers,
      title: 'Corporate Training',
      description: 'Customized training programs for teams and organizations to upskill their workforce.',
      features: ['Team Workshops', 'Custom Curriculum', 'On-site Training', 'Progress Tracking'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive cloud solutions and training programs designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.bgColor} border border-gray-200 dark:border-gray-700 group overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22currentColor%22 fill-rule=%22evenodd%22%3E%3Cpath d=%22M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="text-3xl text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) + 0.5 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Cloud Journey?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of professionals who have advanced their careers with AWS Fusion
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;