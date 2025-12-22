import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TechCardProps {
  name: string;
  description: string;
  icon: string;
  index?: number;
}

export const TechCard = ({ name, description, icon, index = 0 }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-2 border-transparent transition-colors hover:border-primary/20">
        <CardContent className="flex flex-col items-center p-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
            <span className="text-3xl">{icon}</span>
          </div>
          <h3 className="mb-2 font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
