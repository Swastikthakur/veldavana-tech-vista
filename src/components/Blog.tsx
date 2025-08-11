import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useGSAPScrollAnimation } from '@/hooks/useGSAP';
import { useInfiniteFill } from '@/hooks/useInfiniteFill';

const Blog = () => {
  interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    featured: boolean;
    featuredImage: string;
    contentHtml?: string;
  }

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/data/blogs.json');
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (e) {
        console.error('Failed to load blog posts', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const navigate = useNavigate();

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);
  const { visible, hasMore, sentinelRef } = useInfiniteFill(regularPosts.length, 6, 6);

  const handleReadMore = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const gridRef = useGSAPScrollAnimation({ animation: 'fadeInUp', stagger: 0.15 });

  return (
    <section id="blog" className={`pt-24 ${hasMore ? 'pb-32' : 'pb-16'} bg-background`}>
      <div className="w-full max-w-full mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div 
          className="mb-24 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:flex md:justify-between md:items-end">
            <div className="md:max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
                Latest Insights & Articles
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay updated with the latest trends, tutorials, and insights from our team of experts 
                in technology and digital transformation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            className="mb-24 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl overflow-hidden rounded-2xl">
              <div className="lg:grid lg:grid-cols-2 lg:min-h-[500px]">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.featuredImage}
                    alt={`${featuredPost.title} featured image`}
                    className="w-full h-80 lg:h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-sm rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground mr-4">
                        {featuredPost.author}
                      </span>
                      <Clock className="w-5 h-5 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary group px-6 py-2.5 text-base"
                      onClick={() => handleReadMore(featuredPost.slug)}
                    >
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {regularPosts.slice(0, visible).map((post, index) => (
            <div key={post.id} onClick={() => handleReadMore(post.slug)} className="cursor-pointer">
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group rounded-xl">
                <div className="relative">
                  <img
                    src={post.featuredImage}
                    alt={`${post.title} featured image`}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-5 left-5 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pt-6 pb-2 px-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {post.author}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-brand-primary hover:text-brand-secondary hover:bg-brand-primary px-3 py-1 h-auto group"
                      onClick={() => handleReadMore(post.slug)}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          <div ref={sentinelRef} aria-hidden className="col-span-full h-px w-full"></div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Blog;