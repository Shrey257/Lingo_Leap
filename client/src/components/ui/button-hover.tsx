import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonHoverProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "outline" | "link" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const ButtonHover = forwardRef<HTMLButtonElement, ButtonHoverProps>(
  ({ children, className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn(className)}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

ButtonHover.displayName = "ButtonHover";

export { ButtonHover };
