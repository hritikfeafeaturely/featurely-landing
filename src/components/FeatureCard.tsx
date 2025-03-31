interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div
      className="p-9 flex flex-col items-start justify-start 
     bg-transparent border border-[#212121]
     rounded-xl w-full gap-3"
    >
      <div className="text-white text-[18px]  text-left w-full">{title}</div>
      <p className="text-[#98949E] text-sm text-left w-full">{description}</p>
    </div>
  );
}
