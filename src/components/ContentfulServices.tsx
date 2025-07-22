import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useContentful } from '@/hooks/useContentful';
import { getAssetUrl } from '@/services/contentful';
import { Link } from 'react-router-dom';

const ContentfulServices = () => {
  // Replace 'service' with your actual Contentful content type ID
  const { data: services, loading, error } = useContentful('service', 6);

  if (loading) {
    return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Loading Services...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="w-12 h-12 bg-muted rounded-lg mb-4"></div>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Error loading services: {error}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Make sure your Contentful content type ID is correct and you have published content.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { fields } = service;
            const serviceIcon = fields.icon ? getAssetUrl(fields.icon) : null;
            const serviceImage = fields.image ? getAssetUrl(fields.image) : null;
            
            return (
              <motion.div
                key={service.sys.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      {serviceIcon ? (
                        <img
                          src={serviceIcon}
                          alt={`${fields.title} icon`}
                          className="w-12 h-12 object-contain"
                        />
                      ) : serviceImage ? (
                        <img
                          src={serviceImage}
                          alt={fields.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {fields.title || 'Service Title'}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 flex-1">
                      {fields.description || 'Service description'}
                    </p>
                    
                    {fields.features && Array.isArray(fields.features) && (
                      <ul className="space-y-2 mb-6">
                        {fields.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {fields.link && (
                      <Button asChild variant="ghost" className="w-fit group/btn mt-auto">
                        <Link to={fields.link}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {services.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No services found. Make sure you have published content in Contentful with the correct content type.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to transform your business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="#contact">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentfulServices;