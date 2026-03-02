import React from "react";

interface SectionDivProps {
  className?: string;
  children?: React.ReactNode;
}

export function SectionDiv({ className, children }: SectionDivProps) {
  return (
    <div className={`max-w-360 px-6 md:px-8 lg:px-18 mx-auto ${className}`}>
      {children}
    </div>
  );
}

// px-8 md:px-12 lg:px-20
