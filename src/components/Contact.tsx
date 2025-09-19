import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize GSAP
    gsap.set('.notification', { opacity: 0, y: -50, scale: 0.8 });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '612a9710-564f-477f-9407-dab6f59013a6');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Please try again or contact us directly at veldavanatechnologies@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const showScheduleNotification = () => {
    gsap.to('.notification', { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" });
    setTimeout(() => gsap.to('.notification', { opacity: 0, y: -50, scale: 0.8, duration: 0.3 }), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9733447070',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'veldavanatechnologies@gmail.com',
      subtitle: 'We respond within 24 hours'
    }
  ];

  const services = [
    'Custom Software Development',
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'UI/UX Design',
    'Cloud & DevOps',
    'Consulting',
    'Other'
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      {/* GSAP Notification */}
      <div className="notification fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-brand-primary text-brand-secondary px-8 py-4 rounded-xl shadow-lg">
        <p className="font-semibold text-lg">Fill out the form 'send us a message'</p>
      </div>
      
      <div className="w-full max-w-full mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 xs:mb-6 sm:mb-8">
            Contact Our Software Development Team
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto">
            Ready to start your custom software development project? Contact our expert team for AI solutions, mobile app development, and digital transformation consulting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground flex items-center">
                  <MessageCircle className="w-8 h-8 mr-4 text-brand-primary" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-base border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary bg-background"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-accent text-brand-secondary font-bold py-5 px-8 text-lg rounded-xl transition-colors duration-300 hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-3" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Let's Start a Conversation
              </h3>
              <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed">
                We're here to help you bring your ideas to life. Whether you have a 
                specific project in mind or just want to explore possibilities, 
                we'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                          <info.icon className="w-8 h-8 text-brand-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl text-foreground mb-2">
                            {info.title}
                          </h4>
                          <p className="text-brand-primary font-medium text-lg mb-2">
                            {info.details}
                          </p>
                          <p className="text-base text-muted-foreground">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <Card className="border-0 shadow-sm bg-brand-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="w-10 h-10 text-brand-primary mr-6" />
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-2">
                      Quick Response Time
                    </h4>
                    <p className="text-base lg:text-lg text-muted-foreground">
                      We typically respond to inquiries within 2-4 hours during business hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Free Consultation CTA */}
            <Card className="border-0 shadow-sm bg-gradient-to-r from-brand-primary to-brand-accent">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-brand-secondary text-xl lg:text-2xl mb-3">
                  Free Consultation Available
                </h4>
                <p className="text-brand-secondary/90 text-base lg:text-lg mb-6">
                  Schedule a 30-minute call to discuss your project requirements and get expert advice.
                </p>
                <Button
                  className="bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 group overflow-hidden relative text-lg font-bold px-8 py-4 rounded-xl"
                  onClick={showScheduleNotification}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  Schedule Call
                  </span>
                  <div className="absolute inset-0 bg-brand-secondary/90 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;