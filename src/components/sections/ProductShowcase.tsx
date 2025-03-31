import { Container } from "../ui/container";
import { FeatureItem } from "../ui/feature-item";

export const ProductShowcase: React.FC = () => {
  const features = [
    {
      iconSrc: "/web.svg",
      iconAlt: "Web App Interface",
      description: "Navigate your prototype or web app like real users"
    },
    {
      iconSrc: "/confusionpoint.svg",
      iconAlt: "Confusion Points",
      description: "Reveal usability friction and confusion points"
    },
    {
      iconSrc: "/syntheticusers.svg",
      iconAlt: "User Insights",
      description: "Output decision-ready insights - backed by user psychology"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 flex items-center">
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl relative text-2xl md:text-3xl lg:text-4xl leading-tight font-geist text-transparent !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center mx-auto">
            Simulate real users. Understand their behavior.
            <br className="hidden md:block" />
            Improve your product.
          </div>

          <p className="text-[#98949E] text-base md:text-lg font-normal text-center mt-4 md:mt-6 max-w-2xl">
            Featurely gives you behaviorally accurate, AI-powered user
            simulations that:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-16 lg:mt-20 w-full">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index} 
                iconSrc={feature.iconSrc} 
                iconAlt={feature.iconAlt}
              >
                {feature.description}
              </FeatureItem>
            ))}
          </div>

          <p className="text-[#98949E] text-base md:text-lg font-normal text-center mt-12 md:mt-16 max-w-2xl">
            Watch their journeys. Read their thoughts. Discover what's working
            and what's not.
          </p>

          <div className="w-full mt-12 md:mt-16 lg:mt-20 relative rounded-lg overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/93312ab628eb1407028e56eea7175c9da58f9f1f?placeholderIfAbsent=true"
                alt="Product Screenshot Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/e4a7cf22993b66e3233f509eeb16e9fa435d8f3b?placeholderIfAbsent=true"
                alt="Product Screenshot"
                className="relative w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
