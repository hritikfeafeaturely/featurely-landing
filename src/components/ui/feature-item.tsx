import Image from 'next/image';
import { ReactNode } from 'react';

interface FeatureItemProps {
  iconSrc: string;
  iconAlt: string;
  children: ReactNode;
}

export const FeatureItem = ({ iconSrc, iconAlt, children }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-32 h-32 flex items-center justify-center">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={150}
          height={150}
          className="w-full h-auto"
          priority
        />
      </div>
      <p className="text-white text-center text-base md:text-lg">
        {children}
      </p>
    </div>
  );
}; 