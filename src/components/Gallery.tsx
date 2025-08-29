import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Gallery: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'AWS Architecture Workshop',
      description: 'Students learning AWS cloud architecture design patterns',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Training'
    },
    {
      id: 2,
      title: 'Linux Command Line Training',
      description: 'Hands-on Linux system administration training session',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Linux'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Diagram',
      description: 'AWS multi-tier architecture deployment diagram',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Architecture'
    },
    {
      id: 4,
      title: 'DevOps Pipeline Demo',
      description: 'CI/CD pipeline implementation with AWS CodePipeline',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'DevOps'
    },
    {
      id: 5,
      title: 'Team Collaboration',
      description: 'Corporate training session for cloud migration',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Corporate'
    },
    {
      id: 6,
      title: 'Server Monitoring Dashboard',
      description: 'Real-time monitoring and alerting setup',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Monitoring'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => 
        prev === galleryItems.length - 1 ? 0 : prev! + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => 
        prev === 0 ? galleryItems.length - 1 : prev! - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Work in Action
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our training sessions, project implementations, and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-sm font-semibold rounded-full mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl mx-auto p-4">
                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <FiX size={24} />
                </motion.button>

                {/* Navigation Buttons */}
                <motion.button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <FiChevronLeft size={24} />
                </motion.button>

                <motion.button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <FiChevronRight size={24} />
                </motion.button>

                {/* Image */}
                <motion.div
                  key={selectedImage}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={galleryItems[selectedImage].image}
                    alt={galleryItems[selectedImage].title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {galleryItems[selectedImage].category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {selectedImage + 1} of {galleryItems.length}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {galleryItems[selectedImage].title}
                    </h3>
                    <p className="text-gray-600">
                      {galleryItems[selectedImage].description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;