import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useContentful } from '@/hooks/useContentful';
import { getAssetUrl } from '@/services/contentful';

const ContentfulTestimonials = () => {
  // Replace 'testimonial' with your actual Contentful content type ID
  const { data: testimonials, loading, error } = useContentful('testimonial', 10);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  // Calculate displayed testimonials (current + 2 more)
  const getDisplayedTestimonials = () => {
    if (testimonials.length === 0) return [];
    if (testimonials.length === 1) return [testimonials[0]];
    if (testimonials.length === 2) return testimonials;
    
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonial + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Loading Testimonials...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full"></div>
                    <div>
                      <div className="h-4 bg-muted rounded w-24 mb-2"></div>
                      <div className="h-3 bg-muted rounded w-20"></div>
                    </div>
                  </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
          <p className="text-muted-foreground">
            Error loading testimonials: {error}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Make sure your Contentful content type ID is correct and you have published content.
          </p>
        </div>
      </section>
    );
  }

  const currentTestimonials = getDisplayedTestimonials();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {currentTestimonials.length > 0 && (
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {currentTestimonials.map((testimonial, index) => {
                const { fields } = testimonial;
                const clientPhoto = fields.photo ? getAssetUrl(fields.photo) : null;
                
                return (
                  <motion.div
                    key={testimonial.sys.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className={`h-full group hover:shadow-lg transition-all duration-300 ${
                      index === 0 ? 'border-primary/50 shadow-md' : 'border-border/50'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={clientPhoto} alt={fields.name} />
                            <AvatarFallback>
                              {fields.name ? fields.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'C'}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {fields.name || 'Client Name'}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {fields.role && fields.company 
                                ? `${fields.role} at ${fields.company}`
                                : fields.role || fields.company || 'Client'
                              }
                            </p>
                          </div>
                        </div>

                        {fields.rating && (
                          <div className="flex items-center gap-1 mb-4">
                            {renderStars(fields.rating)}
                          </div>
                        )}

                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                          <p className="text-muted-foreground italic pl-6">
                            "{fields.testimonial || fields.text || 'Great experience working with this team!'}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            {testimonials.length > 3 && (
              <div className="flex justify-between items-center">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="sm"
                  className="group"
                >
                  <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="sm"
                  className="group"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}
          </div>
        )}

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No testimonials found. Make sure you have published content in Contentful with the correct content type.
            </p>
          </div>
        )}

        {/* Overall Rating Section */}
        {testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-background rounded-2xl p-8 border border-border/50">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {renderStars(5)}
                  </div>
                  <div className="text-3xl font-bold text-foreground">4.9/5</div>
                  <p className="text-sm text-muted-foreground">Overall Rating</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">{testimonials.length}+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals and create your own success story.
            </p>
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Start Your Project
                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentfulTestimonials;