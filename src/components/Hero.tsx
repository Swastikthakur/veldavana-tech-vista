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

      {/* Floating Icons */}
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
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-brand-secondary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Ideas Into
            <br />
            <span className="bg-gradient-to-r from-brand-secondary to-brand-secondary/80 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-brand-secondary/90 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are Veldavana Technologies, your trusted partner in digital transformation. 
            Specializing in cutting-edge software solutions, AI integration, and innovative web development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
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
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-brand-secondary/80 text-sm lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block z-30"
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