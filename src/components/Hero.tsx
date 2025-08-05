import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const floatingElements = [
    { icon: Code, delay: 0.2, x: 100, y: 50 },
    { icon: Zap, delay: 0.4, x: -80, y: 80 },
    { icon: Globe, delay: 0.6, x: 150, y: -60 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/95 via-brand-primary/90 to-brand-accent/95" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-secondary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Icons - Hidden on mobile */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-brand-secondary/20 hidden lg:block"
          style={{
            left: `calc(50% + ${element.x}px)`,
            top: `calc(50% + ${element.y}px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 2,
            delay: element.delay,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <element.icon size={60} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-full mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-brand-secondary mb-4 xs:mb-6 sm:mb-8 leading-tight px-2 xs:px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Ideas Into
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-brand-secondary to-brand-secondary/80 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-secondary/90 mb-6 xs:mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2 xs:px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Veldavana Technologies is your trusted partner for digital transformation in 2025. We specialize in AI-powered software solutions, next-gen web development, and custom technology integration that drives business growth and operational excellence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center items-center px-2 xs:px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
             className="w-full xs:w-auto bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 font-bold px-6 xs:px-8 sm:px-10 md:px-12 py-4 xs:py-5 sm:py-7 text-lg xs:text-xl sm:text-2xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
             onClick={() => {
               const servicesSection = document.getElementById('services');
               if (servicesSection) {
                 servicesSection.scrollIntoView({ behavior: 'smooth' });
               }
             }}
            >
              Start Your Project
              <ArrowRight className="ml-2 xs:ml-3 h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              className="w-full xs:w-auto bg-brand-primary text-brand-secondary hover:bg-brand-accent font-bold px-6 xs:px-8 sm:px-10 md:px-12 py-4 xs:py-5 sm:py-7 text-lg xs:text-xl sm:text-2xl rounded-xl transition-all duration-300 hover:shadow-2xl group overflow-hidden relative"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              View Our Work
              </span>
              <div className="absolute inset-0 bg-brand-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="mt-16 xs:mt-20 sm:mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-16 max-w-7xl mx-auto px-2 xs:px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '5+', label: 'Happy Clients' },
            { number: '3+', label: 'Patents/Research Papers' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-secondary mb-1 xs:mb-2 sm:mb-3">
                {stat.number}
              </div>
              <div className="text-brand-secondary/80 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-8 h-14 border-2 border-brand-secondary/60 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-2 h-4 bg-brand-secondary/60 rounded-full mt-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;