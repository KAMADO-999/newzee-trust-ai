import { useState } from "react";
import { motion } from "framer-motion";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";

const categories = ["All", "Politics", "Technology", "Sports", "Health"];

const allNews = [
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
    summary: "The latest international championship has set a new record with over 1 billion viewers worldwide.",
    source: "ESPN",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ashes?w=600&auto=format&fit=crop&q=60",
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
  {
    headline: "Major Tennis Tournament Announces Record Prize Money",
    summary: "The prestigious tournament has increased its total prize pool to unprecedented levels, benefiting players across all rounds.",
    source: "Sports Illustrated",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&auto=format&fit=crop&q=60",
  },
  {
    headline: "New Study Reveals Benefits of Mediterranean Diet",
    summary: "Comprehensive research confirms that the Mediterranean diet significantly reduces the risk of heart disease and cognitive decline.",
    source: "Medical News Today",
    category: "Health",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=60",
  },
  {
    headline: "Quantum Computing Milestone Achieved by Research Team",
    summary: "Scientists have successfully demonstrated quantum supremacy in a practical application, marking a new era in computing.",
    source: "MIT Technology Review",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
  },
];

const TrendingNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredNews = selectedCategory === "All"
    ? allNews
    : allNews.filter((news) => news.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="mb-4 text-4xl font-bold">Trending News</h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest headlines from around the world
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* News Grid/List */}
        <div className={
          viewMode === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-4"
        }>
          {filteredNews.map((news, index) => (
            <NewsCard key={index} {...news} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-lg text-muted-foreground">No news found in this category.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSelectedCategory("All")}
            >
              View All News
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingNews;
