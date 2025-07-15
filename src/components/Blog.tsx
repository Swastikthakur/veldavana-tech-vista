import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build software applications and the opportunities it presents.',
      author: 'Priya Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI/ML',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with React and Node.js',
      excerpt: 'A comprehensive guide to creating performant, scalable web applications using modern JavaScript technologies.',
      author: 'Arjun Patel',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies for Modern Businesses',
      excerpt: 'Learn about different cloud migration approaches and best practices for moving your applications to the cloud.',
      author: 'Rajesh Kumar',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'UX Design Principles for Better User Engagement',
      excerpt: 'Essential UX design principles that can dramatically improve user engagement and conversion rates.',
      author: 'Priya Sharma',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Design',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App Development Trends in 2024',
      excerpt: 'Discover the latest trends in mobile app development and how they can benefit your business.',
      author: 'Arjun Patel',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Mobile Development',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Best Practices for Faster Deployment',
      excerpt: 'Implement these DevOps practices to accelerate your development workflow and improve deployment reliability.',
      author: 'Rajesh Kumar',
      date: '2023-12-15',
      readTime: '11 min read',
      category: 'DevOps',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Cloud Computing', 'Design', 'Mobile Development', 'DevOps'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Latest Insights & Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from our team of experts 
            in technology and digital transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-brand-primary text-brand-secondary' 
                  : 'border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-brand-secondary'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <div className="w-full h-64 lg:h-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                    <span className="text-brand-primary font-semibold">Featured Article Image</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-brand-primary text-brand-secondary px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground mr-4">
                        {featuredPost.author}
                      </span>
                      <Clock className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                    <span className="text-brand-primary font-semibold text-center">
                      {post.category} Article
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-brand-primary/90 text-brand-secondary px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {post.author}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-brand-primary hover:text-brand-secondary hover:bg-brand-primary p-0 h-auto group"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary px-8 py-3"
          >
            Load More Articles
          </Button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-brand-secondary mb-4">
            Never Miss an Update
          </h3>
          <p className="text-brand-secondary/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, tutorials, and industry insights 
            delivered straight to your inbox.
          </p>
          <Button 
            variant="outline" 
            className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary"
          >
            Subscribe to Newsletter
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;