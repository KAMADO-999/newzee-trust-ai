import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
  isLast?: boolean;
}

export const StepCard = ({ icon: Icon, title, description, stepNumber, isLast = false }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: stepNumber * 0.15 }}
      className="relative flex flex-col items-center"
    >
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-16 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary to-primary/20 lg:block" />
      )}
      
      {/* Step Circle */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
        <Icon className="h-7 w-7 text-primary-foreground" />
      </div>
      
      {/* Step Number */}
      <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
        {stepNumber}
      </div>
      
      {/* Content */}
      <div className="mt-6 text-center">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};
