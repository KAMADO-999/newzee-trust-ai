import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsCardSkeletonProps {
  index?: number;
  showImage?: boolean;
}

export const NewsCardSkeleton = ({ index = 0, showImage = true }: NewsCardSkeletonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden">
        {showImage && (
          <div className="relative h-48 overflow-hidden">
            <Skeleton className="h-full w-full rounded-none" />
            <div className="absolute bottom-3 left-3">
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
        )}
        <CardHeader className={!showImage ? "pb-3" : ""}>
          {!showImage && <Skeleton className="mb-2 h-6 w-20 rounded-full" />}
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="mt-3 flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-24" />
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full rounded-lg" />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const NewsCardSkeletonGrid = ({ count = 4 }: { count?: number }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <NewsCardSkeleton key={index} index={index} />
      ))}
    </div>
  );
};
