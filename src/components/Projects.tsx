import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'Sakhi Rescue App',
      description: 'A revolutionary women safety app designed to address the growing security concerns in India. Empowering women with instant emergency features and essential safety tools.',
      images: [
        '/lovable-uploads/62713eae-d1f8-4db3-b1b1-d70c70ca0269.png',
        '/lovable-uploads/ce2125d3-536d-4233-ac36-4eac0f9078c5.png',
        '/lovable-uploads/1421a9c0-c454-4f57-99f4-ee5cfa21bbb4.png'
      ],
      technologies: ['React Native', 'Node.js', 'Firebase', 'GPS'],
      category: 'Women Safety',
      client: 'Social Initiative',
      results: ['Instant emergency alerts to contacts', 'Direct police connectivity', 'Self-defense education accessibility'],
      features: [
        'Shake to Alert - Emergency messaging',
        'One-stop police contact (112)',
        'Women Helpline (1091) integration',
        'Self-defense video tutorials',
        'Real-time location sharing',
        'Emergency contact management'
      ],
      route: '/projects/sakhi-rescue'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering 
            innovative solutions across various industries.
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
          >
            {/* Project Image */}
            <div className="relative group flex justify-center">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 p-8 shadow-2xl">
                <div className="w-80 h-[600px] flex items-center justify-center">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Results Achieved:</h4>
                <div className="space-y-2">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-success rounded-full mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link to={project.route || '#'}>
                  <Button className="bg-brand-primary hover:bg-brand-accent text-brand-secondary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project Details
                  </Button>
                </Link>
                <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary">
                  <Github className="w-4 h-4 mr-2" />
                  Case Study
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentProject ? 'bg-brand-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;