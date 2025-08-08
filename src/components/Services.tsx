import { motion } from 'framer-motion';
import { Code, Globe, Brain, Smartphone, Palette, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements with cutting-edge technologies.',
      features: ['Enterprise Applications', 'API Development', 'Database Design', 'System Integration'],
      link: '/services/custom-software'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that deliver exceptional user experiences.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Development', 'Progressive Web Apps'],
      link: '/services/web-development'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning solutions to transform your business operations.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots'],
      link: '/services/ai-solutions'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless performance.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      link: '/services/mobile-apps'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      link: '/services/ui-ux-design'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and DevOps practices for reliable and efficient deployments.',
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
      link: '/services/cloud-devops'
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="w-full max-w-full mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 xs:mb-6 sm:mb-8">
            Our Services
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto">
            We offer comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          {services.map((service, index) => {
            const ServiceCard = () => {
              return (
                <div>
                  <Link to={service.link}>
                    <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-card shadow-sm hover:shadow-xl cursor-pointer p-1 xs:p-2">
                      <CardHeader className="pb-3 xs:pb-4">
                        <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center mb-4 xs:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 text-brand-secondary" />
                        </div>
                        <CardTitle className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-brand-primary transition-colors duration-300 mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm xs:text-base sm:text-lg lg:text-xl text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 xs:space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm xs:text-base lg:text-lg text-muted-foreground">
                              <div className="w-2 h-2 xs:w-3 xs:h-3 bg-brand-primary rounded-full mr-3 xs:mr-4 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            };

            return <ServiceCard key={index} />;
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 xs:mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 xs:mb-8 sm:mb-10 max-w-4xl mx-auto">
            Let's discuss how our expertise can help you achieve your digital goals. 
            Contact us today for a free consultation.
          </p>
          <motion.button
            className="bg-brand-primary text-brand-secondary px-6 xs:px-8 sm:px-10 py-4 xs:py-5 rounded-xl font-bold hover:bg-brand-accent transition-all duration-300 hover:shadow-xl text-base xs:text-lg sm:text-xl group overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            Get Free Consultation
            </span>
            <div className="absolute inset-0 bg-brand-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;