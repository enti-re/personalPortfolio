import React from 'react';
import { ThemeToggle } from "../theme-toggle";

const Name: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-10 animate-reveal">
      <div className="text-base font-medium">Nikhil Chandna</div>
      <div className="md:hidden">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default React.memo(Name);