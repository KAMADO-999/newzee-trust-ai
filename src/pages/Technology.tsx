import { motion } from "framer-motion";
import { TechCard } from "@/components/TechCard";

const technologies = [
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    icon: "⚛️",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom user interfaces.",
    icon: "🎨",
  },
  {
    name: "FastAPI",
    description: "A modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints.",
    icon: "⚡",
  },
  {
    name: "Tesseract OCR",
    description: "An open-source optical character recognition engine for extracting text from images.",
    icon: "📝",
  },
  {
    name: "DistilBERT",
    description: "A distilled version of BERT for efficient natural language processing and text classification.",
    icon: "🧠",
  },
  {
    name: "Sentence-BERT",
    description: "BERT-based model for generating semantically meaningful sentence embeddings.",
    icon: "🔗",
  },
  {
    name: "MongoDB",
    description: "A flexible NoSQL database for storing and retrieving verification data efficiently.",
    icon: "🍃",
  },
  {
    name: "NewsAPI",
    description: "A simple API for searching and retrieving live news articles from across the web.",
    icon: "📰",
  },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Technology Stack</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            NEWZEE is built with cutting-edge technologies to deliver fast, accurate, 
            and reliable news verification.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              description={tech.description}
              icon={tech.icon}
              index={index}
            />
          ))}
        </div>

        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-3xl bg-gradient-dark p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center text-primary-foreground">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">System Architecture</h2>
              <p className="mb-8 text-primary-foreground/80">
                Our multi-layered approach ensures comprehensive analysis of news content
              </p>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-primary-foreground/10 p-6">
                  <div className="mb-3 text-3xl">🖥️</div>
                  <h3 className="mb-2 font-bold">Frontend Layer</h3>
                  <p className="text-sm text-primary-foreground/70">
                    React.js with Tailwind CSS for responsive, modern UI
                  </p>
                </div>
                <div className="rounded-2xl bg-primary-foreground/10 p-6">
                  <div className="mb-3 text-3xl">⚙️</div>
                  <h3 className="mb-2 font-bold">Processing Layer</h3>
                  <p className="text-sm text-primary-foreground/70">
                    FastAPI backend with ML models for analysis
                  </p>
                </div>
                <div className="rounded-2xl bg-primary-foreground/10 p-6">
                  <div className="mb-3 text-3xl">💾</div>
                  <h3 className="mb-2 font-bold">Data Layer</h3>
                  <p className="text-sm text-primary-foreground/70">
                    MongoDB for storage, NewsAPI for real-time data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
