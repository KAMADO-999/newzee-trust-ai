import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/NewsCard";
import { ArrowRight, Shield, Zap, Globe, CheckCircle } from "lucide-react";

const trendingNews = [
  {
    headline: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    summary: "World leaders have agreed on unprecedented measures to reduce carbon emissions by 50% by 2030, marking a significant step in combating climate change.",
    source: "Reuters",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60",
  },
  {
    headline: "Tech Giants Announce Revolutionary AI Safety Standards",
    summary: "Major technology companies have jointly released a comprehensive framework for responsible AI development and deployment.",
    source: "TechCrunch",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60",
  },
  {
    headline: "Scientists Discover New Treatment for Rare Genetic Disease",
    summary: "Researchers have developed a gene therapy that shows promising results in treating previously incurable genetic conditions.",
    source: "Nature",
    category: "Health",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=60",
  },
  {
    headline: "Historic Sports Championship Breaks Viewership Records",
    summary: "The latest international championship has set a new record with over 1 billion viewers worldwide, showcasing the growing global interest.",
    source: "ESPN",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934- voices?w=600&auto=format&fit=crop&q=60",
  },
  {
    headline: "New Economic Policy Expected to Boost Growth",
    summary: "Government announces comprehensive economic reforms aimed at stimulating growth and creating millions of new jobs.",
    source: "Financial Times",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60",
  },
  {
    headline: "Breakthrough in Renewable Energy Storage Technology",
    summary: "Scientists have developed a new battery technology that could store solar and wind energy more efficiently than ever before.",
    source: "Science Daily",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=60",
  },
];

const features = [
  {
    icon: Shield,
    title: "AI-Powered Verification",
    description: "Advanced machine learning algorithms analyze news content for authenticity",
  },
  {
    icon: Zap,
    title: "Real-Time Results",
    description: "Get instant verification results with confidence scores in seconds",
  },
  {
    icon: Globe,
    title: "Source Matching",
    description: "Cross-reference news across thousands of trusted global sources",
  },
  {
    icon: CheckCircle,
    title: "Accuracy Reports",
    description: "Detailed breakdown of why content is classified as real or fake",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
                Verify News.
                <br />
                Build Trust.
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
                Combat misinformation with AI-powered news verification. 
                Instantly analyze articles, images, and sources to separate fact from fiction.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/verify">
                  <Button variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
                    Verify News Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose NEWZEE?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our platform combines cutting-edge AI technology with comprehensive source verification
                to help you make informed decisions about the news you consume.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending News Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Trending News</h2>
              <p className="mt-2 text-muted-foreground">Latest headlines from around the world</p>
            </div>
            <Link to="/trending">
              <Button variant="outline">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trendingNews.map((news, index) => (
              <NewsCard key={index} {...news} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-16"
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Verify Your News?
              </h2>
              <p className="mb-8 text-primary-foreground/80">
                Start verifying news articles and images in seconds. 
                Join thousands of users making informed decisions.
              </p>
              <Link to="/verify">
                <Button variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
                  Start Verifying Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
