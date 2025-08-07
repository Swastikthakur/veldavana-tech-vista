import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGSAPScrollAnimation, useGSAPHover } from '@/hooks/useGSAP';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Thembi',
      role: 'Revolutionizing tuck shops in Zimbabwe',
      company: 'Zimbabwe',
      content: 'Veldavana Technologies not only delivers exceptional tech solutions and support, but their market research exceeded all expectations, completely transforming the way my business operates.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Dr. Advik Sharma',
      role: 'Founder of Vytal Aid',
      company: 'Vytal Aid',
      content: 'Veldavana Technologies stands out for consistently delivering high-quality work ahead of deadlines. Their team goes the extra mile, supporting client presentations, offering strategic input, and maintaining a level of professionalism that truly sets them apart.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: '',
      role: '',
      company: '',
      content: '',
      rating: 0,
      image: '',
      isCTA: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonials = [
    testimonials[currentTestimonial],
    testimonials[(currentTestimonial + 1) % testimonials.length],
    testimonials[(currentTestimonial + 2) % testimonials.length]
  ];

  const gridRef = useGSAPScrollAnimation({ 
    animation: 'fadeInScale', 
    duration: 0.6, 
    stagger: 0.2 
  });

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="w-full max-w-full mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 xs:mb-8">
            What Our Clients Say
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            working with Veldavana Technologies.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 lg:gap-16 mb-12 xs:mb-16">
          {currentTestimonials.map((testimonial, index) => {
            const TestimonialCard = () => {
              const hoverRef = useGSAPHover();
              
              return (
                <div
                  key={testimonial.id}
                  className="relative"
                >
                  {testimonial.isCTA ? (
                    <a href="#contact" className="block h-full">
                      <div ref={hoverRef}>
                        <Card 
                          className="h-full border-0 bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 p-4 xs:p-6 sm:p-8 lg:p-10 relative overflow-hidden rounded-xl hover:brightness-110 cursor-pointer"
                        >
                          <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                            {/* Plus Icon */}
                            <div className="text-white mb-4 xs:mb-6">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                            
                            {/* CTA Text */}
                            <h3 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-2 xs:mb-3 text-center">
                              Be the Next Happy Client
                            </h3>
                            <p className="text-white/70 text-sm xs:text-base sm:text-lg text-center">
                              Share your journey with us
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </a>
                  ) : (
                    <div ref={hoverRef}>
                      <Card className="h-full border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 p-4 xs:p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                        {/* Quote Icon */}
                        <div className="absolute top-4 right-4 xs:top-6 xs:right-6 text-brand-primary/20">
                          <Quote size={32} className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-3 xs:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-4 h-4 xs:w-5 xs:h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" 
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <CardContent className="p-0">
                          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg lg:text-xl mb-6 xs:mb-8 leading-relaxed italic">
                            "{testimonial.content}"
                          </p>
                          
                          <div className="flex items-center">
                            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mr-4 xs:mr-6 flex-shrink-0">
                              <span className="text-brand-secondary font-semibold text-sm xs:text-base sm:text-lg">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground text-base xs:text-lg lg:text-xl">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm xs:text-base lg:text-lg text-muted-foreground">
                                {testimonial.role}
                              </p>
                              <p className="text-sm xs:text-base lg:text-lg text-brand-primary font-medium">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              );
            };

            return <TestimonialCard key={index} />;
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-brand-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 xs:mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-base xs:text-lg lg:text-xl text-muted-foreground mb-6 xs:mb-8 sm:mb-10 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <motion.button
            className="bg-brand-primary text-brand-secondary px-6 xs:px-8 sm:px-10 py-4 xs:py-5 rounded-xl text-base xs:text-lg lg:text-xl font-bold hover:bg-brand-accent transition-all duration-300 hover:shadow-lg group overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            Start Your Project
            </span>
            <div className="absolute inset-0 bg-brand-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;