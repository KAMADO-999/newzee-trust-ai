import { motion } from "framer-motion";
import { StepCard } from "@/components/StepCard";
import { Upload, FileSearch, Brain, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Content",
    description: "Submit a news article, headline, or image that you want to verify.",
  },
  {
    icon: FileSearch,
    title: "OCR Processing",
    description: "Our system extracts and processes text from images using advanced OCR technology.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Machine learning models analyze the content for patterns, language, and credibility indicators.",
  },
  {
    icon: Globe,
    title: "Source Matching",
    description: "Cross-reference the news against thousands of trusted sources worldwide.",
  },
  {
    icon: CheckCircle,
    title: "Get Results",
    description: "Receive a detailed verdict with confidence score and explanation.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">How It Works</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our AI-powered verification process analyzes news content through multiple stages
            to determine authenticity and provide you with reliable results.
          </p>
        </motion.div>

        {/* Steps - Desktop */}
        <div className="mb-16 hidden lg:block">
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-primary via-primary to-primary/20" />
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <StepCard
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Steps - Mobile/Tablet */}
        <div className="mb-16 lg:hidden">
          <div className="relative space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                {/* Step Indicator */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="my-2 h-full w-0.5 flex-1 bg-gradient-to-b from-primary to-primary/20" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="mb-1 text-sm font-medium text-primary">Step {index + 1}</div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-secondary/50 p-8 md:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Powered by Advanced AI</h2>
            <p className="mb-6 text-muted-foreground">
              Our system uses DistilBERT for natural language understanding and Sentence-BERT 
              for semantic similarity matching. Combined with real-time news source verification, 
              we achieve high accuracy in detecting misinformation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/verify">
                <Button size="lg">
                  Try It Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/technology">
                <Button variant="outline" size="lg">
                  View Technology Stack
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
