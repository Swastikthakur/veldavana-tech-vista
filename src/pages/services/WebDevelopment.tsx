import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Globe, Smartphone, ShoppingCart, Palette, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebDevelopment = () => {
  const offerings = [
    {
      icon: Globe,
      title: 'React & Next.js Development',
      description: 'Modern, fast, and SEO-optimized websites built with cutting-edge frameworks.',
      features: ['Server-Side Rendering', 'Static Site Generation', 'Progressive Web Apps', 'Performance Optimization']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payment processing and inventory management.',
      features: ['Custom Shopping Carts', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking']
    },
    {
      icon: Palette,
      title: 'CMS Development',
      description: 'User-friendly content management systems for easy website updates and maintenance.',
      features: ['Custom CMS Solutions', 'WordPress Development', 'Headless CMS', 'Multi-language Support']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that look perfect on all devices and screen sizes.',
      features: ['Mobile Optimization', 'Cross-browser Compatibility', 'Touch-friendly Interfaces', 'Accessibility Standards']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed, SEO, and user experience.',
      features: ['Core Web Vitals', 'Image Optimization', 'Caching Strategies', 'CDN Integration']
    },
    {
      icon: Search,
      title: 'SEO & Analytics',
      description: 'Search engine optimization and comprehensive analytics to drive traffic and conversions.',
      features: ['On-page SEO', 'Technical SEO', 'Google Analytics', 'Conversion Tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-foreground hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">Web Development</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Globe className="w-10 h-10 text-brand-secondary" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Web
              <span className="block text-brand-primary">Development</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Create stunning, responsive websites and web applications that deliver exceptional user experiences. 
              From simple landing pages to complex e-commerce platforms, we build digital solutions that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Web Solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development services designed to establish your strong online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <offering.icon className="w-7 h-7 text-brand-secondary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                      {offering.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {offering.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {offering.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Launch Your Website?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a stunning web presence that attracts customers and grows your business online.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-brand-primary text-brand-secondary hover:bg-brand-accent transition-colors duration-300 px-8 py-6 text-lg rounded-xl"
              >
                <Link to="/#contact" className="inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Get a Quote
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;