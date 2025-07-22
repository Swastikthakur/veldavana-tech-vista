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
    <section id="services" className="py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
            We offer comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Link to={service.link}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-card shadow-sm hover:shadow-xl cursor-pointer">
                <CardHeader className="pb-4 p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-secondary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your digital goals. 
            Contact us today for a free consultation.
          </p>
          <motion.button
            className="bg-brand-primary text-brand-secondary px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent transition-colors duration-300 hover:shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;