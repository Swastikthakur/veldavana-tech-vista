import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { motion } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | Veldavana Technologies';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main 
        className="flex-grow pt-24 md:pt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.main>
      <Footer />
    </div>
  );
};

export default AboutPage;