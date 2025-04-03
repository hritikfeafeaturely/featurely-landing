"use client";
import Image from "next/image";
import { Container } from "../ui/container";

export const ElevateYourProduct = () => {
  return (
    <section 
      className="py-12 md:py-28 lg:py-24 flex items-center relative overflow-hidden"
      style={{ background: "rgba(8, 8, 10, 0.8)" }}
    >
      {/* Background glows positioned behind content */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* First glow - purple */}
        <div 
          className="absolute rounded-full" 
          style={{
            background: "#928EEB",
            filter: "blur(107.75px)",
            width: "200px",
            height: "100px",
            opacity: 0.5,
            bottom: "0%",
            left: "37%",
          }}
        />
        
        {/* Second glow - darker blue */}
        <div 
          className="absolute rounded-full" 
          style={{
            background: "#452E8A",
            filter: "blur(107.75px)",
            width: "200px",
            height: "150px",
            opacity: 0.6,
            bottom: "-5%",
            right: "35%",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Content with backdrop filter */}
        <div className="flex flex-col items-center relative backdrop-filter backdrop-blur-md p-8 rounded-xl bg-black/10">
          <div className="relative w-full flex justify-center">
            <Image
              src="/brain.svg"
              alt="Brain Visualization"
              width={500}
              height={500}
              className="relative"
              priority
            />
          </div>

          <div className="w-full max-w-3xl text-center relative mt-6">
            <div
              className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent 
            !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            >
              Elevate your product craft.
              <br className="hidden sm:block" />
              With speed and clarity
            </div>
          </div>

          <div className="w-full mt-10 md:mt-16 lg:mt-20 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/588b231406c413db3d4bb07a0fd9dfc897dae586?placeholderIfAbsent=true"
              alt="Product Showcase"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
