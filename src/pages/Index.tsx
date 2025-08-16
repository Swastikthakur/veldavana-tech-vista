import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Lazy load components for better performance
const LazyServices = lazy(() => import('@/components/Services'));
const LazyAbout = lazy(() => import('@/components/About'));
const LazyProjects = lazy(() => import('@/components/Projects'));
const LazyTestimonials = lazy(() => import('@/components/Testimonials'));
const LazyTechStack = lazy(() => import('@/components/TechStack'));
const LazyContact = lazy(() => import('@/components/Contact'));
const LazyFooter = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-96 bg-muted/30 animate-pulse" />}>
        <LazyServices />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <LazyAbout />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <LazyProjects />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30 animate-pulse" />}>
        <LazyTestimonials />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <LazyTechStack />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30 animate-pulse" />}>
        <LazyContact />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <LazyFooter />
      </Suspense>
    </div>
  );
};

export default Index;
