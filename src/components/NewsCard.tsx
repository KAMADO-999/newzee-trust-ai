import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  headline: string;
  summary: string;
  source: string;
  category: string;
  imageUrl?: string;
  index?: number;
}

export const NewsCard = ({ headline, summary, source, category, imageUrl, index = 0 }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden">
        {imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={headline}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            <Badge className="absolute bottom-3 left-3 backdrop-blur-sm" variant="outline">
              {category}
            </Badge>
          </div>
        )}
        <CardHeader className={!imageUrl ? "pb-3" : ""}>
          {!imageUrl && (
            <Badge className="mb-2 w-fit" variant="default">
              {category}
            </Badge>
          )}
          <h3 className="line-clamp-2 text-lg font-bold leading-tight transition-colors group-hover:text-primary">
            {headline}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">{summary}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <ExternalLink className="h-3 w-3" />
            <span>{source}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Link to="/verify" className="w-full">
            <Button variant="outline" className="w-full">
              Verify This
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
