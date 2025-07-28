import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Using uploaded images directly
const ceoPic = '/lovable-uploads/243154ff-c932-4df9-a1b9-bf0e09b4c690.png'; // Girl - CEO & Founder
const ctoPic = '/lovable-uploads/1421a9c0-c454-4f57-99f4-ee5cfa21bbb4.png'; // Boy - CTO & Founder

const About = () => {
  const team = [
    {
      name: 'Aastha Bhattacharjee',
      role: 'CEO & Founder',
      image: ceoPic,
      bio: 'Bringing 4+ years of leadership, innovation, and strategic foresight to Veldavana Technologies, driving ideas from concept to impactful, scalable solutions through clear vision and purpose-led execution.',
      skills: ['Strategic Planning', 'Business Development', 'Team Leadership', 'Digital Innovation']
    },
    {
      name: 'Swastik Thakur',
      role: 'CTO & Founder',
      image: ctoPic,
      bio: 'Blending 5+ years of market insight, financial strategy, and tech expertise to ensure every idea at Veldavana Technologies is grounded, scalable, and built for real-world impact.',
      skills: ['AI/ML', 'Cloud Architecture', 'System Design', 'Tech Leadership']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'We empower businesses with scalable, intuitive tech that solves real problems, elevates brands, and shapes the present and the future.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted name in digital innovation, where ideas become intelligent solutions driving global transformation.'
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'We build tech with clarity & speed that simplifies & collaborates with integrity, and earns lasting trust.'
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'Delivering exceptional quality, meeting deadlines, and exceeding expectations while staying at the forefront of technological advancement.'
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="w-full max-w-full mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8">
            About Veldavana Technologies
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto">
            Founded with a vision to bridge the gap between innovative technology and business success, 
            we are a team of passionate professionals dedicated to delivering exceptional digital solutions.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-24 sm:mb-32">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 p-2">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-10 h-10 text-brand-secondary" />
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Meet Our Team
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Our diverse team of experts combines technical excellence with creative problem-solving 
            to deliver outstanding results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 bg-card shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-2">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-96 object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {member.name}
                  </CardTitle>
                  <p className="text-brand-primary font-semibold text-lg lg:text-xl">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="space-y-3">
                    <p className="text-base lg:text-lg font-semibold text-foreground">Key Skills:</p>
                    <div className="flex flex-wrap gap-3">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-4 py-2 bg-brand-primary/10 text-brand-primary text-sm lg:text-base rounded-full"
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
          className="mt-20 sm:mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 sm:mb-16">
            Our Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
            {[
              { number: '10+', label: 'Prototypes Built', suffix: '' },
              { number: '5+', label: 'Pilot Clients & Collaborations', suffix: '' },
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
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-primary mb-3 sm:mb-4">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
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