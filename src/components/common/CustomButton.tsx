import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ElementType, forwardRef } from "react";

type CustomButtonProps = {
  icon?: ElementType;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    { icon: Icon, iconPosition = "left", children, className, variant = "default", ...props },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
        {children}
        {iconPosition === "right" && Icon && <Icon className="w-5 h-5" />}
      </Button>
    );
  },
);

export default CustomButton;
