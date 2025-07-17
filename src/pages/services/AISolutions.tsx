import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Brain, Bot, Eye, MessageSquare, BarChart, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AISolutions = () => {
  const offerings = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models and algorithms to automate processes and extract insights from your data.',
      features: ['Predictive Analytics', 'Classification Models', 'Recommendation Systems', 'Anomaly Detection']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and language understanding for content automation and insights.',
      features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Content Generation']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automated visual recognition and processing.',
      features: ['Object Detection', 'Facial Recognition', 'OCR Solutions', 'Quality Inspection']
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that enhances customer service and user engagement.',
      features: ['Customer Support Bots', 'Lead Qualification', 'Multi-language Support', 'Integration APIs']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights with advanced analytics platforms.',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Automated Reporting', 'Trend Analysis']
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      features: ['API Development', 'Cloud AI Services', 'Model Deployment', 'Performance Monitoring']
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
            <h1 className="text-lg font-semibold text-foreground">AI Solutions</h1>
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
              <Brain className="w-10 h-10 text-brand-secondary" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
              AI
              <span className="block text-brand-primary">Solutions</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations. 
              From machine learning to computer vision, we deliver intelligent solutions that drive innovation and efficiency.
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
              AI Technologies
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge artificial intelligence solutions designed to automate processes and unlock insights.
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
              Ready to Embrace AI?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's explore how artificial intelligence can revolutionize your business processes and unlock new opportunities.
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

export default AISolutions;