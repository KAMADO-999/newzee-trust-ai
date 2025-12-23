import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/15 text-primary hover:bg-primary/25",
        secondary: "border-transparent bg-secondary/15 text-secondary hover:bg-secondary/25",
        destructive: "border-transparent bg-destructive/15 text-destructive hover:bg-destructive/25",
        success: "border-transparent bg-green-500/15 text-green-600 hover:bg-green-500/25",
        outline: "border-border/50 text-foreground bg-card/50 backdrop-blur-sm",
        verified: "border-transparent bg-green-500/15 text-green-600",
        fake: "border-transparent bg-destructive/15 text-destructive",
        glass: "border-border/30 bg-card/40 backdrop-blur-lg text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
