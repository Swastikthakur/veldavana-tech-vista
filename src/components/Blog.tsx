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

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleReadMore = (postId: number) => {
    // Create a new window/tab with the blog post
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      const post = blogPosts.find(p => p.id === postId);
      if (post) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${post.title} - Veldavana Technologies</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              body { font-family: 'Inter', sans-serif; }
              .brand-primary { color: #0B1957; }
              .brand-secondary { color: #FDFCE8; }
            </style>
          </head>
          <body class="bg-gray-50">
            <div class="max-w-4xl mx-auto px-6 py-12">
              <button onclick="window.close()" class="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                ← Back to Blog
              </button>
              <article class="bg-white rounded-lg shadow-lg p-8">
                <div class="mb-6">
                  <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                    ${post.category}
                  </span>
                  <h1 class="text-4xl font-bold text-gray-900 mb-4">${post.title}</h1>
                  <div class="flex items-center text-gray-600 text-sm">
                    <span>By ${post.author}</span>
                    <span class="mx-2">•</span>
                    <span>${new Date(post.date).toLocaleDateString()}</span>
                    <span class="mx-2">•</span>
                    <span>${post.readTime}</span>
                  </div>
                </div>
                <div class="prose max-w-none">
                  <p class="text-lg text-gray-700 leading-relaxed mb-6">${post.excerpt}</p>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    This is the full content of the blog post. In a real implementation, you would fetch the complete article content from your CMS or database.
                  </p>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
                  <ul class="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Important insight related to ${post.category}</li>
                    <li>Best practices and recommendations</li>
                    <li>Future trends and considerations</li>
                  </ul>
                </div>
              </article>
            </div>
          </body>
          </html>
        `);
        newWindow.document.close();
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
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

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              className="bg-brand-primary text-brand-secondary hover:bg-brand-accent px-8 py-3 group overflow-hidden relative"
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
                      onClick={() => handleReadMore(featuredPost.id)}
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
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
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
                      onClick={() => handleReadMore(post.id)}
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
        )
        )
        }

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
              </span>
              <div className="absolute inset-0 bg-brand-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;