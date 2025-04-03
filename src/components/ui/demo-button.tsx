import React from "react";
import { cn } from "@/lib/utils";

interface DemoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: "default" | "small";
  children: React.ReactNode;
}

export const DemoButton = ({
  className,
  fullWidth = false,
  variant = "default",
  children,
  ...props
}: DemoButtonProps) => {
  return (
    <button
      className={cn(
        "rounded border bg-white text-black font-medium uppercase transition-colors hover:bg-white/90",
        fullWidth ? "w-full" : "",
        variant === "default" ? "px-6 py-2.5 text-sm" : "px-4 py-2 text-xs",
        "border-[#5F5C70]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
