import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useContentful } from '@/hooks/useContentful';

const ContentfulAchievements = () => {
  // Replace 'achievement' with your actual Contentful content type ID
  const { data: achievements, loading, error } = useContentful('achievement', 8);

  // Default icons for different achievement types
  const getDefaultIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'growth':
      case 'revenue':
        return TrendingUp;
      case 'clients':
      case 'users':
        return Users;
      case 'awards':
      case 'recognition':
        return Award;
      default:
        return Target;
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Loading Achievements...</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 bg-muted rounded-full mb-4"></div>
                  <div className="h-8 bg-muted rounded w-16 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-24"></div>
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
          <p className="text-muted-foreground">
            Error loading achievements: {error}
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that showcase our commitment to excellence and the impact we've made
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const { fields } = achievement;
            const IconComponent = getDefaultIcon(fields.type || fields.category);
            
            return (
              <motion.div
                key={achievement.sys.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {fields.number || fields.stat || '0'}
                      {fields.suffix && (
                        <span className="text-primary">{fields.suffix}</span>
                      )}
                    </div>
                    
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {fields.title || 'Achievement'}
                    </h3>
                    
                    {fields.description && (
                      <p className="text-xs text-muted-foreground">
                        {fields.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {achievements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No achievements found. Make sure you have published content in Contentful with the correct content type.
            </p>
          </div>
        )}

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Driving Results That Matter
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These achievements represent our dedication to delivering exceptional value 
              and building lasting partnerships with our clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentfulAchievements;