import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loader"
                className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 flex items-center justify-center z-50"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-white text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-6xl font-bold mb-4"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ☁️
                  </motion.div>
                  <h1 className="text-4xl font-bold">AWS Fusion</h1>
                  <p className="text-xl mt-2">Loading your cloud experience...</p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Navigation />
                <main>
                  <Hero />
                  <About />
                  <Services />
                  <Gallery />
                  <FAQ />
                  <Contact />
                </main>
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;