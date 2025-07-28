import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Globe, Brain } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: Globe,
      technologies: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'TypeScript', level: 92 },
        { name: 'Tailwind CSS', level: 95 }
      ]
    },
    {
      title: 'Backend',
      icon: Code,
      technologies: [
        { name: 'Node.js', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Go', level: 70 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      technologies: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'DynamoDB', level: 75 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      technologies: [
        { name: 'AWS', level: 92 },
        { name: 'Azure', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'CI/CD', level: 88 },
        { name: 'Terraform', level: 80 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      technologies: [
        { name: 'React Native', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'iOS Native', level: 80 },
        { name: 'Android Native', level: 80 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 90 }
      ]
    },
    {
      title: 'AI & ML',
      icon: Brain,
      technologies: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'OpenAI API', level: 90 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'Computer Vision', level: 80 }
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="w-full max-w-full mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Our Tech Stack
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to deliver 
            robust, scalable, and future-ready solutions.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mr-6">
                  <category.icon className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base lg:text-lg font-medium text-foreground">
                        {tech.name}
                      </span>
                      <span className="text-sm lg:text-base text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-brand-primary to-brand-accent h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Tech Logos */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
            Technologies We Love
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-10 lg:gap-16 items-center justify-items-center">
            {[
              'React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript', 'Docker', 'Kubernetes'
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-base lg:text-lg font-semibold text-brand-primary text-center">
                  {tech}
                </span>
              </motion.div>
            ))}
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
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Need a Custom Technology Solution?
          </h3>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Our team stays up-to-date with the latest technologies and can adapt to your 
            specific requirements. Let's discuss the best tech stack for your project.
          </p>
          <motion.button
            className="bg-brand-primary text-brand-secondary px-10 py-5 rounded-xl text-lg lg:text-xl font-bold hover:bg-brand-accent transition-all duration-300 hover:shadow-lg group overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            Discuss Your Project
            </span>
            <div className="absolute inset-0 bg-brand-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;