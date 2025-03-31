import { FeatureCard } from "../FeatureCard";
import { Container } from "../ui/container";

export function Features() {
  const features = [
    {
      title: "Traditional research slows you down",
      description:
        "It’s costly, time-consuming, and often ignored, leading to slower decision-making.",
    },
    {
      title: "A/B testing comes too late",
      description:
        "Testing after launch means you react to issues instead of preventing them.",
    },
    {
      title: "Usability tests lack context",
      description:
        "They reveal what users do but not why they do it, leaving gaps in understanding.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #16141F 46%, #0A0A0A 100%)",
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          <div
            className="w-full md:max-w-xl text-2xl md:text-3xl lg:text-4xl font-normal text-transparent !bg-clip-text 
          [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          >
            Fast teams still struggle to
            <br />
            build the right thing
          </div>
          <p className="w-full md:max-w-sm text-base md:text-lg text-justify text-[#98949E]">
            We’re forced to choose between moving fast or building well.
            Featurely ends that tradeoff.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
