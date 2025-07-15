import { motion, useScroll, useTransform, useAnimationFrame } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe, Star, Sparkles, Layers, Cpu, Orbit, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Continuous time animation
  useAnimationFrame((t) => {
    setTime(t * 0.001);
  });

  // Advanced floating elements with varied behavior
  const floatingElements = [
    { icon: Code, delay: 0, x: 20, y: 20, speed: 1.2, amplitude: 30, rotation: true },
    { icon: Zap, delay: 0.5, x: 80, y: 60, speed: 0.8, amplitude: 40, rotation: false },
    { icon: Globe, delay: 1, x: 15, y: 80, speed: 1.5, amplitude: 25, rotation: true },
    { icon: Cpu, delay: 1.5, x: 85, y: 15, speed: 0.9, amplitude: 35, rotation: false },
    { icon: Layers, delay: 2, x: 70, y: 25, speed: 1.1, amplitude: 20, rotation: true },
    { icon: Atom, delay: 2.5, x: 25, y: 70, speed: 1.3, amplitude: 45, rotation: false },
  ];

  // Morphing geometric shapes
  const geometricShapes = Array.from({ length: 8 }, (_, i) => ({
    size: 40 + Math.random() * 60,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.3,
    type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
  }));

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent"
    >
      {/* Dynamic Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: y1 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`,
          }}
        />
      </motion.div>

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: y2 }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(253, 252, 232, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(253, 252, 232, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate3d(${mousePosition.x * -5}px, ${mousePosition.y * -5}px, 0) rotate(${time * 0.5}deg)`,
          }}
        />
      </motion.div>

      {/* Morphing Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
            x: Math.sin(time * 0.5 + shape.delay) * 20,
            y: Math.cos(time * 0.3 + shape.delay) * 15,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        >
          <div 
            className={`w-full h-full border border-brand-secondary/20 backdrop-blur-sm ${
              shape.type === 'circle' ? 'rounded-full' : 
              shape.type === 'square' ? 'rounded-lg' : 
              'clip-path-triangle'
            }`}
            style={{
              background: `linear-gradient(45deg, hsl(var(--brand-secondary) / 0.1), hsl(var(--brand-secondary) / 0.05))`,
              transform: `translate3d(${mousePosition.x * (index + 1) * 2}px, ${mousePosition.y * (index + 1) * 2}px, 0)`,
            }}
          />
        </motion.div>
      ))}

      {/* Advanced Particle System */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 3;
          const randomDuration = 4 + Math.random() * 6;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
                x: Math.sin(time * 0.8 + i) * 30,
                y: Math.cos(time * 0.6 + i) * 25,
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-2 h-2 rounded-full bg-gradient-to-br from-brand-secondary to-brand-secondary/50"
                style={{
                  boxShadow: `0 0 20px hsl(var(--brand-secondary) / 0.5)`,
                  filter: `blur(${Math.sin(time + i) * 0.5 + 0.5}px)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Energy Orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--brand-secondary) / 0.2) 0%, transparent 70%)`,
            filter: 'blur(2px)',
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Interactive Floating Tech Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-brand-secondary/30 cursor-pointer hover:text-brand-secondary/60 transition-colors duration-300"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate3d(${mousePosition.x * (index + 1) * 3}px, ${mousePosition.y * (index + 1) * 3}px, 0)`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: 1, 
            scale: [0.8, 1.2, 1],
            y: Math.sin(time * element.speed + element.delay) * element.amplitude,
            x: Math.cos(time * element.speed * 0.7 + element.delay) * (element.amplitude * 0.5),
            rotate: element.rotation ? time * 20 + element.delay * 60 : 0,
          }}
          transition={{
            duration: 1.5,
            delay: element.delay
          }}
          whileHover={{ 
            scale: 1.5, 
            rotate: element.rotation ? 180 : 0,
            transition: { duration: 0.3 }
          }}
        >
          <element.icon 
            size={50 + Math.sin(time + element.delay) * 10} 
            style={{
              filter: `drop-shadow(0 0 15px hsl(var(--brand-secondary) / 0.4))`,
            }}
          />
        </motion.div>
      ))}

      {/* Main Content with Advanced Animations */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center"
        style={{ opacity, scale, y: y3 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Glowing Title with Multiple Layers */}
          <motion.div className="relative mb-8">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-brand-secondary leading-tight relative z-10"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.4 }}
            >
              <motion.span
                className="block"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(var(--brand-secondary) / 0.5)",
                    "0 0 40px hsl(var(--brand-secondary) / 0.8)",
                    "0 0 20px hsl(var(--brand-secondary) / 0.5)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Transforming Ideas Into
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-brand-secondary via-brand-secondary/90 to-brand-secondary bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Digital Reality
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  style={{ clipPath: "inset(0)" }}
                />
              </motion.span>
            </motion.h1>
            
            {/* Background glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-secondary/10 via-brand-secondary/20 to-brand-secondary/10 blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-brand-secondary/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            We are <motion.span 
              className="font-semibold bg-gradient-to-r from-brand-secondary to-brand-secondary/80 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Veldavana Technologies
            </motion.span>, your trusted partner in digital transformation. 
            Specializing in cutting-edge software solutions, AI integration, and innovative web development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 font-semibold px-10 py-6 text-xl rounded-2xl transition-all duration-500 group relative overflow-hidden"
                style={{
                  boxShadow: `0 10px 40px hsl(var(--brand-secondary) / 0.3)`,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                />
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-secondary/50 text-brand-secondary hover:bg-brand-secondary/10 hover:border-brand-secondary font-semibold px-10 py-6 text-xl rounded-2xl transition-all duration-500 backdrop-blur-sm"
                style={{
                  boxShadow: `0 0 30px hsl(var(--brand-secondary) / 0.2)`,
                }}
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Stats with Particle Effects */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { number: '100+', label: 'Projects Completed', icon: Star },
            { number: '50+', label: 'Happy Clients', icon: Sparkles },
            { number: '5+', label: 'Years Experience', icon: Orbit },
            { number: '24/7', label: 'Support', icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.4 + index * 0.1,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <div className="relative z-10 p-6 rounded-2xl backdrop-blur-sm border border-brand-secondary/20 group-hover:border-brand-secondary/40 transition-all duration-500">
                <stat.icon 
                  className="mx-auto mb-3 text-brand-secondary/60 group-hover:text-brand-secondary transition-colors duration-300" 
                  size={32}
                />
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px hsl(var(--brand-secondary) / 0.3)",
                      "0 0 20px hsl(var(--brand-secondary) / 0.6)",
                      "0 0 10px hsl(var(--brand-secondary) / 0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-brand-secondary/80 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-8 h-14 border-2 border-brand-secondary/60 rounded-full flex justify-center backdrop-blur-sm"
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(var(--brand-secondary) / 0.3)",
                "0 0 40px hsl(var(--brand-secondary) / 0.6)",
                "0 0 20px hsl(var(--brand-secondary) / 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-4 bg-gradient-to-b from-brand-secondary to-brand-secondary/50 rounded-full mt-3"
              animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-full blur-lg"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;