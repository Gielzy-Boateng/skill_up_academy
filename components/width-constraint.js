import { cn } from "@/lib/utils";
import React from "react";

export default function WidthConstraint({ className, children }) {
  return (
    <div className={cn("mx-auto max-w-[1200px] p-5", className)}>
      {children}
    </div>
  );
}
