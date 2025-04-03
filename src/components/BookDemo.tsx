"use client";

import React from 'react';
import { Button } from './ui/button';
import { CalendarDays } from 'lucide-react';

interface BookDemoProps {
  className?: string;
  href?: string;
  fullWidth?: boolean;
}

const BookDemo: React.FC<BookDemoProps> = ({ 
  className, 
  href = "/demo", 
  fullWidth = false 
}) => {
  return (
    <Button
      variant="primary"
      size="default"
      href={href}
      fullWidth={fullWidth}
      className={className}
      leftIcon={<CalendarDays className="w-4 h-4" />}
    >
      Book 15 Min Walkthrough
    </Button>
  );
};

export default BookDemo; 