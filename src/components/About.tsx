import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ceoPic from '@/assets/team-ceo.jpg';
import ctoPic from '@/assets/team-cto.jpg';
import leadDevPic from '@/assets/team-lead-dev.jpg';

const About = () => {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: ceoPic,
      bio: 'Visionary leader with 15+ years in technology and business strategy. Passionate about driving digital transformation.',
      skills: ['Strategic Planning', 'Business Development', 'Team Leadership']
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      image: ctoPic,
      bio: 'Technical architect with expertise in AI, cloud computing, and scalable system design. Leads our innovation initiatives.',
      skills: ['AI/ML', 'Cloud Architecture', 'System Design']
    },
    {
      name: 'Arjun Patel',
      role: 'Lead Developer',
      image: leadDevPic,
      bio: 'Full-stack developer with passion for creating exceptional user experiences and robust backend systems.',
      skills: ['React/Node.js', 'Mobile Development', 'DevOps']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading technology partner for businesses seeking digital transformation, recognized for excellence, innovation, and client success.'
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Integrity, innovation, excellence, and client-centricity guide everything we do. We believe in building long-term partnerships based on trust and results.'
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'Delivering exceptional quality, meeting deadlines, and exceeding expectations while staying at the forefront of technological advancement.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About Veldavana Technologies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to bridge the gap between innovative technology and business success, 
            we are a team of passionate professionals dedicated to delivering exceptional digital solutions.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Meet Our Team
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts combines technical excellence with creative problem-solving 
            to deliver outstanding results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {member.name}
                  </CardTitle>
                  <p className="text-brand-primary font-semibold">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Stats */}
        <motion.div
          className="mt-16 sm:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 sm:mb-12">
            Our Achievement
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: '100+', label: 'Projects Delivered', suffix: '' },
              { number: '50+', label: 'Happy Clients', suffix: '' },
              { number: '98', label: 'Success Rate', suffix: '%' },
              { number: '24/7', label: 'Support Available', suffix: '' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-1 sm:mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm md:text-base leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;