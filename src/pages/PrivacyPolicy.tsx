import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | Veldavana Technologies';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main 
        className="flex-grow pt-20 md:pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-12">
          {/* Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="mb-6 text-brand-primary hover:text-brand-accent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">1. Information We Collect</h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  At Veldavana Technologies, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Contact us through our website forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request our services</li>
                  <li>Engage with our content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">2. How We Use Your Information</h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you relevant updates and information</li>
                  <li>Analyze and improve our website performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this Privacy Policy. We may share your information with trusted partners who assist 
                  us in operating our website and conducting our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies to enhance user experience. You can choose to disable cookies through your 
                  browser settings, though this may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">6. Your Rights</h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">7. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Veldavana Technologies</p>
                  <p className="text-muted-foreground">Email: veldavanatechnologies@gmail.com</p>
                  <p className="text-muted-foreground">Phone: +91 9733447070</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;