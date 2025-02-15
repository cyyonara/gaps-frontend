import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ElementType } from "react";

type CustomButtonProps = {
  icon?: ElementType;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: React.FC<CustomButtonProps> = ({
  icon: Icon,
  iconPosition = "left",
  children,
  className,
  variant = "default",
  ...props
}) => {
  return (
    <Button variant={variant} className={cn("flex items-center gap-2", className)} {...props}>
      {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
      {children}
      {iconPosition === "right" && Icon && <Icon className="w-5 h-5" />}
    </Button>
  );
};

export default CustomButton;
