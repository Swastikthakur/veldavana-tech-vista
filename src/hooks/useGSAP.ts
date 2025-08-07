import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface GSAPAnimationOptions {
  trigger?: string;
  animation?: 'fadeInUp' | 'fadeInScale' | 'parallaxHover';
  duration?: number;
  delay?: number;
  stagger?: number;
}

export const useGSAPScrollAnimation = (options: GSAPAnimationOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const { animation = 'fadeInUp', duration = 0.8, delay = 0, stagger = 0.1 } = options;

    let animationProps = {};

    switch (animation) {
      case 'fadeInUp':
        gsap.set(element, { opacity: 0, y: 30 });
        animationProps = {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power2.out',
        };
        break;
      
      case 'fadeInScale':
        gsap.set(element, { opacity: 0, scale: 0.9 });
        animationProps = {
          opacity: 1,
          scale: 1,
          duration,
          ease: 'back.out(1.2)',
        };
        break;
      
      case 'parallaxHover':
        animationProps = {
          y: -10,
          duration: 0.3,
          ease: 'power2.out',
          paused: true,
        };
        break;
    }

    if (animation === 'parallaxHover') {
      const hoverAnimation = gsap.to(element, animationProps);
      
      const handleMouseEnter = () => hoverAnimation.play();
      const handleMouseLeave = () => hoverAnimation.reverse();
      
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        hoverAnimation.kill();
      };
    } else {
      const children = element.children;
      
      if (children.length > 1 && stagger > 0) {
        gsap.set(children, { opacity: 0, y: 30 });
        gsap.to(children, {
          ...animationProps,
          stagger,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        });
      } else {
        gsap.to(element, {
          ...animationProps,
          delay,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);

  return elementRef;
};

export const useGSAPHover = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elementRef;
};