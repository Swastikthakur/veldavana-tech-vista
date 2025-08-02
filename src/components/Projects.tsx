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
    },
    {
      id: 2,
      title: 'Object Detection Program',
      description: 'A real-time object detection system built using deep learning. Detects and labels multiple objects from live or static feeds with high accuracy. Designed to be fast, scalable, and easily integrable into real-world applications.',
      images: [
        '/lovable-uploads/1b0ef320-8d97-4c2d-8945-cf1a1e7540ac.png',
        '/lovable-uploads/fe6b67a8-671d-49e3-9054-d21574b63ddd.png',
        '/lovable-uploads/0dbcb343-f35b-4154-acc5-be64fafaea7d.png'
      ],
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLOv5', 'NumPy'],
      category: 'AI & Machine Learning',
      client: 'AI Research Project',
      results: ['Real-time object detection with 95% accuracy', 'Edge device optimization achieved', 'Multi-object tracking capability implemented'],
      features: [
        'Real-time detection with bounding boxes',
        'Multi-object tracking',
        'High accuracy even in low-light conditions',
        'Optimized for edge devices'
      ],
      route: '/projects/object-detection'
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
    <section id="projects" className="py-24 lg:py-32 bg-background">
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
            Featured Projects
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto">
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-20 items-center"
          >
            {/* Project Image */}
            <div className="relative group flex justify-center">
              <div className="relative overflow-hidden rounded-2xl xs:rounded-3xl bg-gradient-to-br from-muted/30 to-muted/10 p-3 xs:p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="w-48 h-[300px] xs:w-60 xs:h-[380px] sm:w-72 sm:h-[450px] flex items-center justify-center">
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
            <div className="space-y-4 xs:space-y-6">
              <div>
                <span className="inline-block px-3 xs:px-4 py-1 xs:py-2 bg-brand-primary/10 text-brand-primary text-sm xs:text-base rounded-full mb-4 xs:mb-6">
                  {project.category}
                </span>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 xs:mb-6">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base xs:text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-foreground mb-3 xs:mb-4">Key Features:</h4>
                <ul className="space-y-2 xs:space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground text-sm xs:text-base sm:text-lg lg:text-xl">
                      <div className="w-2 h-2 xs:w-3 xs:h-3 bg-brand-primary rounded-full mr-3 xs:mr-4 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-foreground mb-3 xs:mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1 xs:gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 xs:px-3 sm:px-4 py-1 xs:py-2 bg-brand-primary/10 text-brand-primary text-xs xs:text-sm sm:text-base lg:text-lg rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-4 xs:p-6 sm:p-8">
                <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-foreground mb-3 xs:mb-4">Results Achieved:</h4>
                <div className="space-y-1 xs:space-y-2">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center text-muted-foreground text-sm xs:text-base sm:text-lg lg:text-xl">
                      <div className="w-2 h-2 xs:w-3 xs:h-3 bg-brand-success rounded-full mr-3 xs:mr-4 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
                <Link to={project.route || '#'}>
                  <Button className="w-full xs:w-auto bg-brand-primary hover:bg-brand-accent text-brand-secondary text-sm xs:text-base sm:text-lg py-4 xs:py-5 sm:py-6 px-4 xs:px-6 sm:px-8 rounded-xl font-bold">
                    <ExternalLink className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3" />
                    View Project Details
                  </Button>
                </Link>
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