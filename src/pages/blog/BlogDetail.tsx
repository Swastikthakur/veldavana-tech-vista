import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { useGSAPHeroParallax } from '@/hooks/useGSAP';

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

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAPHeroParallax(imageRef as any, textRef as any);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/data/blogs.json');
        const data = await res.json();
        const found = (data.posts as BlogPost[]).find(p => p.slug === slug);
        if (!found) {
          navigate('/');
          return;
        }
        setPost(found);
      } catch (e) {
        console.error('Failed to load blog post', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug, navigate]);

  // SEO: Update title, description, canonical
  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Veldavana Technologies`;
    const metaDesc = document.querySelector("meta[name='description']") || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', post.excerpt);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const linkCanonical = document.querySelector("link[rel='canonical']") || document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    linkCanonical.setAttribute('href', window.location.href);
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-14 flex items-center">
            <div className="h-3 w-40 bg-muted rounded animate-pulse" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
          <div className="h-80 w-full bg-muted rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Glassy top navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-14 flex items-center justify-between">
          <Link to="/#blog" className="inline-flex items-center text-sm text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Go back to Latest Insights & Articles</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative">
        <div ref={imageRef} className="relative w-full h-[38vh] md:h-[48vh] lg:h-[56vh] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={`${post.title} featured image`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
        <div ref={textRef} className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 -mt-20 relative">
          <div className="bg-card/90 backdrop-blur rounded-2xl shadow-[var(--shadow-card)] p-6 md:p-8 border border-border">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-4 h-4 mr-1 ml-3" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <article
          className="text-foreground leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />
      </main>
    </div>
  );
};

export default BlogDetail;
