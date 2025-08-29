import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why choose AWS Fusion for cloud training?',
      answer: 'AWS Fusion provides hands-on training with real-world projects, experienced instructors who are AWS certified professionals, and a comprehensive curriculum that covers both theoretical concepts and practical implementation. Our training methodology ensures you gain practical skills that are directly applicable in the industry.'
    },
    {
      question: 'Do you offer official AWS certifications?',
      answer: 'Yes, we prepare you for official AWS and Linux certifications including AWS Solutions Architect, AWS DevOps Engineer, AWS SysOps Administrator, and various Linux Professional certifications. Our training programs are designed to help you pass these certifications on your first attempt with comprehensive study materials and practice exams.'
    },
    {
      question: 'What about cloud security in your training programs?',
      answer: 'Cloud security is integrated throughout all our training programs. We cover AWS security best practices, Identity and Access Management (IAM), VPC security, encryption, compliance frameworks, and security monitoring. Our training includes hands-on labs for implementing security measures in real AWS environments.'
    },
    {
      question: 'Do you provide corporate training for teams?',
      answer: 'Absolutely! We offer customized corporate training programs tailored to your organization\'s specific needs. This includes on-site training, custom curriculum development, flexible scheduling, and progress tracking. We work with teams of all sizes, from small startups to large enterprises.'
    },
    {
      question: 'What support do you provide after training completion?',
      answer: 'We provide ongoing support including access to our online learning portal, regular updates on AWS services, career guidance, job placement assistance, and a community of AWS professionals. Our support continues even after course completion to ensure your success in your cloud journey.'
    },
    {
      question: 'Are the training materials and labs hands-on?',
      answer: 'Yes, all our training programs include extensive hands-on labs using real AWS environments. Students get access to sandbox AWS accounts for practice, real-world project scenarios, and step-by-step guided exercises. Our approach is 70% hands-on practice and 30% theory to ensure practical skills development.'
    },
    {
      question: 'What are the prerequisites for your AWS courses?',
      answer: 'For basic AWS courses, we only require basic IT knowledge and familiarity with computers. For advanced courses, we recommend some experience with system administration or development. We provide preparatory materials to help students meet any prerequisites and ensure everyone can succeed in our programs.'
    },
    {
      question: 'Do you offer flexible learning schedules?',
      answer: 'Yes, we understand that professionals have busy schedules. We offer multiple learning formats including weekend batches, evening classes, intensive bootcamps, and self-paced online learning. We also provide recorded sessions so you can review materials at your convenience.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our training programs and services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileHover={{ x: 5 }}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <FiMinus className="text-2xl text-blue-600 dark:text-blue-400" />
                  ) : (
                    <FiPlus className="text-2xl text-blue-600 dark:text-blue-400" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-blue-500 to-purple-600 mb-4"></div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;