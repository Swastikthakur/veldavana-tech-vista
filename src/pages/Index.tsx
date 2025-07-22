import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContentfulServices from '@/components/ContentfulServices';
import About from '@/components/About';
import ContentfulProjects from '@/components/ContentfulProjects';
import ContentfulAchievements from '@/components/ContentfulAchievements';
import ContentfulTestimonials from '@/components/ContentfulTestimonials';
import TechStack from '@/components/TechStack';
import ContentfulBlog from '@/components/ContentfulBlog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ContentfulServices />
      <About />
      <ContentfulProjects />
      <ContentfulAchievements />
      <ContentfulTestimonials />
      <TechStack />
      <ContentfulBlog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
