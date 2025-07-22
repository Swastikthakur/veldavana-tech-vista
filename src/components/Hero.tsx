import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const floatingElements = [
    { icon: Code, delay: 0.2, x: 100, y: 50 },
    { icon: Zap, delay: 0.4, x: -80, y: 80 },
    { icon: Globe, delay: 0.6, x: 150, y: -60 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/lpX7xTNpmN5zjwg4/scene.splinecode"
          onLoad={() => setIsSplineLoaded(true)}
          className="w-full h-full"
        />
      </div>
      
      {/* Fallback background while Spline loads */}
      {!isSplineLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/95 via-brand-primary/90 to-brand-accent/95" />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-brand-primary/20 to-brand-accent/30 z-10" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-20">
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
          className="absolute text-brand-secondary/20 hidden lg:block z-20"
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
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-secondary mb-4 sm:mb-6 lg:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Ideas Into
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-brand-secondary to-brand-secondary/80 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-brand-secondary/90 mb-6 sm:mb-8 lg:mb-10 max-w-xs xs:max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are Veldavana Technologies, your trusted partner in digital transformation. 
            <span className="hidden sm:inline">Specializing in cutting-edge software solutions, AI integration, and innovative web development.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="w-full xs:w-auto bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full xs:w-auto border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-secondary mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-brand-secondary/80 text-xs sm:text-sm lg:text-base leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-brand-secondary/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-brand-secondary/50 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;