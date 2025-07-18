import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Phone, Video, Users, Smartphone, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SakhiRescue = () => {
  const screenshots = [
    '/lovable-uploads/62713eae-d1f8-4db3-b1b1-d70c70ca0269.png',
    '/lovable-uploads/09e16b0d-accb-4c80-88ca-3ece3ccf46bf.png',
    '/lovable-uploads/7387ab07-fd91-48c0-a2b6-8626727ef7e8.png'
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Shake to Alert",
      description: "Revolutionary feature that detects phone shaking patterns and instantly sends emergency messages to pre-configured contacts with location details."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "One-Stop Emergency Contacts",
      description: "Direct access to Police (112), Women Helpline (1091), and Ambulance (108) services with one-tap calling functionality."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Self-Defense Training",
      description: "Comprehensive video library featuring essential self-defense techniques taught by certified instructors, accessible anytime."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Emergency Contact Management",
      description: "Smart contact system that allows users to add trusted contacts who will receive alerts during emergency situations."
    }
  ];

  const techStack = [
    { name: "React Native", description: "Cross-platform mobile development" },
    { name: "Node.js", description: "Backend server and API development" },
    { name: "MongoDB", description: "Database for user data and contacts" },
    { name: "Firebase", description: "Real-time messaging and notifications" },
    { name: "GPS Integration", description: "Location tracking and sharing" },
    { name: "SMS API", description: "Emergency message delivery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-6 py-4">
          <Link to="/#projects">
            <Button variant="ghost" className="text-brand-primary hover:bg-brand-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sakhi Rescue App
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering women's safety through technology. A comprehensive emergency response system 
              designed to address the growing security concerns in India and provide instant help when needed most.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-lg font-semibold text-brand-primary">Built with compassion for women's safety</span>
            </div>
          </motion.div>

          {/* App Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {screenshots.map((screenshot, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-4 shadow-xl">
                  <img
                    src={screenshot}
                    alt={`Sakhi Rescue App Screenshot ${index + 1}`}
                    className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Sakhi Rescue */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why "Sakhi Rescue"?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                "Sakhi" means "friend" in many Indian languages, symbolizing the app's role as a trusted companion 
                and supportive friend for women in distress. The name represents our commitment to being there for 
                women when they need help the most - like a reliable friend who's always watching out for their safety.
              </p>
              <div className="bg-brand-primary/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">The Need for Action</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With the alarming rise in violence against women in India, there's an urgent need for immediate, 
                  accessible safety solutions. Sakhi Rescue was born from the understanding that technology can bridge 
                  the gap between danger and help, providing women with the tools they need to stay safe and get 
                  assistance quickly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every feature is designed with women's safety as the top priority, ensuring quick access to help 
              and essential safety resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technical Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge technologies to ensure reliability, performance, and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & User Friendliness */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Use Cases</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Emergency Situations</h3>
                    <p className="text-muted-foreground">When feeling unsafe or threatened, users can quickly shake their phone to send alerts to emergency contacts with location details.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Daily Commute Safety</h3>
                    <p className="text-muted-foreground">Regular users during late hours, traveling alone, or in unfamiliar areas can have peace of mind with instant access to help.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Learning Self-Defense</h3>
                    <p className="text-muted-foreground">Women can learn essential self-defense techniques through expert-guided video tutorials, building confidence and skills.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* User Friendliness */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">User-Friendly Design</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Intuitive Interface</h3>
                    <p className="text-muted-foreground">Simple, clean design that can be used effectively even in high-stress situations without confusion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Quick Access</h3>
                    <p className="text-muted-foreground">All emergency features are accessible within 2 taps or through gesture controls, ensuring rapid response times.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Stress-Tested Design</h3>
                    <p className="text-muted-foreground">Interface designed and tested for use during panic situations, with large buttons and clear visual cues.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Call to Action */}
      <section className="py-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Making a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Sakhi Rescue represents more than just an app - it's a movement towards creating safer spaces for women. 
              By combining technology with social responsibility, we're working to build a world where every woman 
              can feel secure and empowered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#projects">
                <Button className="bg-brand-primary hover:bg-brand-accent text-brand-secondary px-8 py-3">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary px-8 py-3">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SakhiRescue;