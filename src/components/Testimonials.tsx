import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'Veldavana Technologies transformed our business with their innovative AI solutions. The team delivered beyond our expectations, and their ongoing support has been exceptional.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, RetailPro',
      company: 'RetailPro',
      content: 'The e-commerce platform they built for us increased our online sales by 200%. Their attention to detail and technical expertise is truly impressive.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, HealthFirst',
      company: 'HealthFirst',
      content: 'Working with Veldavana was a game-changer for our telemedicine platform. They understood our vision and delivered a solution that exceeded all expectations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Operations Director, LogiFlow',
      company: 'LogiFlow',
      content: 'The custom software solution they developed streamlined our operations and reduced costs by 30%. Professional team with excellent communication throughout.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Head, BrandBoost',
      company: 'BrandBoost',
      content: 'Their web development skills are outstanding. Our new website not only looks amazing but also performs exceptionally well. Highly recommended!',
      rating: 5,
      image: '/api/placeholder/80/80'
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

  return (
    <section className="py-20 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            working with Veldavana Technologies.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 p-6 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-brand-primary/20">
                  <Quote size={40} />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Content */}
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-brand-secondary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-brand-primary font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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

        {/* Overall Rating */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 fill-yellow-400 text-yellow-400" 
                />
              ))}
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <p className="text-sm text-muted-foreground">
                Based on 50+ client reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <motion.button
            className="bg-brand-primary text-brand-secondary px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent transition-colors duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;