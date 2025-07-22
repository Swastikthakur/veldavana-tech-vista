import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useContentful } from '@/hooks/useContentful';
import { getAssetUrl } from '@/services/contentful';

const ContentfulProjects = () => {
  // Replace 'project' with your actual Contentful content type ID
  const { data: projects, loading, error } = useContentful('project', 10);
  const [currentProject, setCurrentProject] = useState(0);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Loading Projects...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Error loading projects: {error}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Make sure your Contentful content type ID is correct and you have published content.
          </p>
        </div>
      </section>
    );
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const featuredProjects = projects.filter(project => project.fields.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover some of our most impactful work and the solutions we've delivered for our clients
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        {displayProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {displayProjects[currentProject]?.fields.name || 'Project Name'}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {displayProjects[currentProject]?.fields.description || 'Project description'}
                    </p>
                  </div>

                  {displayProjects[currentProject]?.fields.technologies && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(displayProjects[currentProject].fields.technologies) 
                          ? displayProjects[currentProject].fields.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))
                          : typeof displayProjects[currentProject].fields.technologies === 'string' 
                            ? displayProjects[currentProject].fields.technologies.split(',').map((tech, index) => (
                                <Badge key={index} variant="secondary">
                                  {tech.trim()}
                                </Badge>
                              ))
                            : null
                        }
                      </div>
                    </div>
                  )}

                  {displayProjects[currentProject]?.fields.features && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {Array.isArray(displayProjects[currentProject].fields.features) 
                          ? displayProjects[currentProject].fields.features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="flex items-center text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))
                          : null
                        }
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-4">
                    {displayProjects[currentProject]?.fields.link && (
                      <Button asChild className="group">
                        <a 
                          href={displayProjects[currentProject].fields.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    )}
                    {displayProjects[currentProject]?.fields.githubLink && (
                      <Button asChild variant="outline" className="group">
                        <a 
                          href={displayProjects[currentProject].fields.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="relative">
                  {displayProjects[currentProject]?.fields.image && (
                    <img
                      src={getAssetUrl(displayProjects[currentProject].fields.image)}
                      alt={displayProjects[currentProject].fields.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
              </div>

              {displayProjects.length > 1 && (
                <div className="flex justify-between items-center p-6 border-t border-border">
                  <Button onClick={prevProject} variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  
                  <div className="flex space-x-2">
                    {displayProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentProject ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button onClick={nextProject} variant="outline" size="sm">
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const { fields } = project;
              const projectImage = fields.image ? getAssetUrl(fields.image) : null;
              
              return (
                <motion.div
                  key={project.sys.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border overflow-hidden">
                    {projectImage && (
                      <div className="relative overflow-hidden">
                        <img
                          src={projectImage}
                          alt={fields.name}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {fields.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {fields.name || 'Project Name'}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-1">
                        {fields.description || fields.shortDescription || 'Project description'}
                      </p>
                      
                      {fields.technologies && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {(Array.isArray(fields.technologies) 
                              ? fields.technologies.slice(0, 3)
                              : fields.technologies.split(',').slice(0, 3)
                            ).map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {typeof tech === 'string' ? tech.trim() : tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex gap-2 mt-auto">
                        {fields.link && (
                          <Button asChild variant="ghost" size="sm" className="group/btn">
                            <a href={fields.link} target="_blank" rel="noopener noreferrer">
                              View
                              <ExternalLink className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                          </Button>
                        )}
                        {fields.githubLink && (
                          <Button asChild variant="ghost" size="sm">
                            <a href={fields.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found. Make sure you have published content in Contentful with the correct content type.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentfulProjects;