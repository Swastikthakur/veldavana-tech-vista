import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useContentful } from '@/hooks/useContentful';
import { getAssetUrl, formatContentfulDate } from '@/services/contentful';

const ContentfulBlog = () => {
  // Replace 'blogPost' with your actual Contentful content type ID
  const { data: blogPosts, loading, error } = useContentful('blogPost', 6);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Loading Blog Posts...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Blog Posts</h2>
          <p className="text-muted-foreground">
            Error loading blog posts: {error}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Make sure your Contentful content type ID is correct and you have published content.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest insights, tutorials, and industry news
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const { fields } = post;
            const featuredImage = fields.featuredImage ? getAssetUrl(fields.featuredImage) : null;
            
            return (
              <motion.div
                key={post.sys.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                  {featuredImage && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={featuredImage}
                        alt={fields.title || 'Blog post image'}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {fields.category && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {fields.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {fields.title || 'Untitled Post'}
                    </CardTitle>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {fields.author && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{fields.author}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatContentfulDate(post.sys.createdAt)}</span>
                      </div>
                      {fields.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{fields.readTime} min</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {fields.excerpt || fields.description || 'No description available.'}
                    </p>
                    
                    <Button variant="ghost" className="w-fit group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts found. Make sure you have published content in Contentful with the correct content type.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentfulBlog;