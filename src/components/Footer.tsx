import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  const footerLinks = {
    services: [
      { name: 'Custom Software Development', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile App Development', href: '#services' },
      { name: 'AI Solutions', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Cloud & DevOps', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-brand-primary text-brand-secondary">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Newsletter Section */}
        <motion.div
          className="py-8 sm:py-12 border-b border-brand-secondary/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-brand-secondary/80 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
              Subscribe to our newsletter for the latest tech trends, project updates, and industry insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-brand-secondary/10 border-brand-secondary/30 text-brand-secondary placeholder-brand-secondary/60 text-sm sm:text-base"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 font-semibold text-sm sm:text-base px-4 sm:px-6"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-secondary/80 rounded-lg flex items-center justify-center">
                  <span className="text-brand-primary font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold">Veldavana Technologies</span>
              </div>
              <p className="text-brand-secondary/80 mb-6 leading-relaxed">
                Transforming ideas into digital reality through innovative technology solutions. 
                We partner with businesses to drive digital transformation and achieve sustainable growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-brand-secondary/60" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-brand-secondary/60" />
                  <span className="text-sm">info@veldavana.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-brand-secondary/60" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-brand-secondary/80 hover:text-brand-secondary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-brand-secondary/80 hover:text-brand-secondary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-brand-secondary/80 hover:text-brand-secondary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 sm:py-8 border-t border-brand-secondary/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm text-brand-secondary/60 mb-4 sm:mb-0 text-center sm:text-left"
            >
              © {new Date().getFullYear()} Veldavana Technologies. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-brand-secondary/10 rounded-full flex items-center justify-center hover:bg-brand-secondary/20 transition-colors duration-200 group"
                >
                  <social.icon className="w-4 h-4 text-brand-secondary/60 group-hover:text-brand-secondary transition-colors duration-200" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;