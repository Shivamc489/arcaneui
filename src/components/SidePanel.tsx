import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const SidePanel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div
        ref={panelRef}
        className={cn(
          "fixed left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out z-4000 w-80 h-2/3 bg-white shadow-lg flex flex-col rounded-tr-lg rounded-br-lg",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
      <Button
        className={cn(
          "fixed left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out z-50 bg-gray-800 text-white flex items-center justify-center w-6 h-20 rounded-r-full custom-blended-button",
          isOpen ? "translate-x-80" : "translate-x-0"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">✨</span>
      </Button>
    </div>
  );
};
SidePanel.displayName = "SidePanel";

const SidePanelHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
SidePanelHeader.displayName = "SidePanelHeader";

const SidePanelTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
SidePanelTitle.displayName = "SidePanelTitle";

const SidePanelDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SidePanelDescription.displayName = "SidePanelDescription";

const SidePanelContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
SidePanelContent.displayName = "SidePanelContent";

const SidePanelFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
SidePanelFooter.displayName = "SidePanelFooter";

export {
  SidePanel,
  SidePanelHeader,
  SidePanelTitle,
  SidePanelDescription,
  SidePanelContent,
  SidePanelFooter,
};