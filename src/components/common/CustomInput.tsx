import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ElementType, forwardRef } from "react";

type CustomInputProps = {
  icon?: ElementType;
  iconPosition?: "left" | "right";
  onIconClick?: () => void;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ icon: Icon, iconPosition = "left", onIconClick, className, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center", className)}>
        {iconPosition === "left" && Icon && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 pointer-events-none"
            onClick={onIconClick}
          >
            <Icon className="w-5 h-5" />
          </Button>
        )}
        <Input
          ref={ref}
          className={cn(
            "w-full px-10",
            iconPosition === "left" && "pl-10",
            iconPosition === "right" && "pr-10",
          )}
          {...props}
        />
        {iconPosition === "right" && Icon && (
          <Button variant="ghost" size="icon" className="absolute right-2" onClick={onIconClick}>
            <Icon className="w-5 h-5" />
          </Button>
        )}
      </div>
    );
  },
);

export default CustomInput;
