"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { DemoButton } from "@/components/ui/demo-button";
import { cn } from "@/lib/utils";

interface CalendlyButtonProps {
  url: string;
  text: string;
  className?: string;
  fullWidth?: boolean;
  variant?: "default" | "small";
}

export const CalendlyButton = ({
  url,
  text,
  className,
  fullWidth = false,
  variant = "default",
}: CalendlyButtonProps) => {
  const [domLoaded, setDomLoaded] = useState(false);

  // Wait for DOM to load before rendering Calendly
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <div className={cn(fullWidth ? "w-full" : "")}>
      <PopupButton
        url={url}
        text={text}
        rootElement={document.getElementsByTagName("body")[0]}
        className={cn(
          "rounded border bg-white text-black font-medium uppercase transition-colors hover:bg-white/90",
          fullWidth ? "w-full" : "",
          variant === "default" ? "px-6 py-2.5 text-sm" : "px-4 py-2 text-xs",
          "border-[#5F5C70]",
          className
        )}
      />
    </div>
  ) : (
    <DemoButton className={className} fullWidth={fullWidth} variant={variant}>
      {text}
    </DemoButton>
  );
};
