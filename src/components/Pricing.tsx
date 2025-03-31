import { PricingCard } from "./PricingCard";
import { Container } from "./ui/container";
import { pricingPlans } from "@/lib/constants";

export const Pricing = () => {
  return (
    <section className="w-full text-center min-h-screen">
      <Container>
        <h2 className="text-white text-3xl md:text-[40px] font-normal tracking-[-0.8px] mt-16 md:mt-[100px]">
          The right plan, right from the start
        </h2>
        <div className="w-full mt-10 md:mt-[54px] mb-16">
          <div className="flex flex-col md:flex-row rounded-xl h-full min-h-[850px]">
            {pricingPlans.map((plan, index) => {
              const isFirst = index === 0;
              const isLast = index === pricingPlans.length - 1;
              
              // Add appropriate border radius based on position
              const planWithRounding = {
                ...plan,
                rounding: isFirst 
                  ? "rounded-t-[12px] md:rounded-t-none md:rounded-l-[12px]" 
                  : isLast 
                    ? "rounded-b-[12px] md:rounded-b-none md:rounded-r-[12px]" 
                    : ""
              };
              
              return <PricingCard key={plan.id} plan={planWithRounding} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
