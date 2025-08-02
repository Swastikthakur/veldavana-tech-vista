import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Cpu, Eye, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ObjectDetection = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary text-sm rounded-full mb-6">
              AI & Machine Learning
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Object Detection Program
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A real-time object detection system built using deep learning. Detects and labels multiple objects 
              from live or static feeds with high accuracy. Designed to be fast, scalable, and easily integrable 
              into real-world applications.
            </p>
          </motion.div>

          {/* Main Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/30 to-muted/10 p-8 lg:p-12 shadow-2xl max-w-3xl mx-auto">
              <img 
                src="/lovable-uploads/1b0ef320-8d97-4c2d-8945-cf1a1e7540ac.png" 
                alt="Object Detection AI Interface"
                className="w-full h-auto object-contain drop-shadow-2xl max-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 via-transparent to-brand-accent/5 rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "Real-time Detection",
                description: "Instant object recognition with precise bounding boxes"
              },
              {
                icon: Cpu,
                title: "Multi-object Tracking",
                description: "Track multiple objects simultaneously across frames"
              },
              {
                icon: Shield,
                title: "Low-light Performance",
                description: "High accuracy even in challenging lighting conditions"
              },
              {
                icon: Zap,
                title: "Edge Optimization",
                description: "Optimized for deployment on edge devices and IoT"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technologies Used
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Python', 'OpenCV', 'TensorFlow', 'YOLOv5', 'NumPy'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-brand-primary/10 text-brand-primary text-lg rounded-full font-semibold"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Project Overview
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>System Architecture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The object detection system was built using a robust deep learning architecture centered around 
                    the YOLOv5 (You Only Look Once) model. This state-of-the-art neural network processes entire 
                    images in a single forward pass, making it exceptionally fast for real-time applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The system integrates OpenCV for computer vision operations, TensorFlow for model inference, 
                    and NumPy for efficient numerical computations. Python serves as the primary programming 
                    language, providing excellent library support and ease of development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Processing & Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The model was trained on a comprehensive dataset containing thousands of annotated images 
                    across various object categories. Data augmentation techniques including rotation, scaling, 
                    and brightness adjustment were employed to improve model robustness.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Extensive testing was conducted across different environments, lighting conditions, and 
                    camera angles to ensure consistent performance. The final model achieves 95% accuracy 
                    on standard benchmark datasets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Technical Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    One of the primary challenges was optimizing the model for edge devices while maintaining 
                    detection accuracy. This required careful balance between model complexity and inference speed.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Another significant challenge was ensuring robust performance in low-light conditions. 
                    This was addressed through specialized preprocessing techniques and training on diverse 
                    lighting scenarios.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deployment & Use Cases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The system has been successfully deployed in various real-world scenarios including 
                    security surveillance, retail analytics, and autonomous vehicle perception systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Its modular architecture allows for easy integration into existing systems, making it 
                    suitable for IoT devices, mobile applications, and cloud-based services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Detection Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Live Detection Examples
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the system in action with real-time object detection and classification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 p-6 shadow-xl">
                <img 
                  src="/lovable-uploads/fe6b67a8-671d-49e3-9054-d21574b63ddd.png" 
                  alt="Person and Object Detection"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Object Detection</h3>
                <p className="text-muted-foreground">Real-time detection of people and objects with confidence scores</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 p-6 shadow-xl">
                <img 
                  src="/lovable-uploads/0dbcb343-f35b-4154-acc5-be64fafaea7d.png" 
                  alt="Advanced Object Classification"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Precision Classification</h3>
                <p className="text-muted-foreground">Accurate identification and classification of everyday objects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Results & Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "95%",
                label: "Detection Accuracy",
                description: "Consistent performance across various object categories"
              },
              {
                metric: "30 FPS",
                label: "Real-time Processing",
                description: "Smooth real-time detection on standard hardware"
              },
              {
                metric: "50ms",
                label: "Average Latency",
                description: "Ultra-low latency for edge device deployment"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-brand-primary mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-foreground mb-2">{result.label}</div>
                    <p className="text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Interested in AI Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can implement similar AI-powered solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-accent text-brand-secondary">
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Your AI Project
              </Button>
              <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary">
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ObjectDetection;