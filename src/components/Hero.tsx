import React from "react";
import { Container } from "./ui/container";
import { OutlineButton } from "./ui/outline-button";

import { CalendlyButton } from "./ui/calendly-button";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        <div className="w-full relative flex flex-col z-10">
          <div className="flex flex-col justify-center items-center mt-16 md:mt-20 gap-6 md:gap-8">
            <div className="w-full max-w-4xl relative text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-tight lg:leading-[68px] font-geist text-transparent !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center mx-auto">
              Build with clarity, not guesswork.
            </div>
            <p className="text-[#98949E] text-base md:text-lg text-center max-w-2xl">
              Most teams ship based on gut or lagging signals.
              <br className="hidden md:block" />
              Featurely helps you simulate real users, and turn feedback into
              better product flows — instantly.
            </p>
            <div className="flex gap-4">
              <CalendlyButton
                url="https://calendly.com/d/cm2c-5q4-npt/help-shape-featurely"
                text="Book a Demo"
                className="px-8 relative z-20"
              />
              <Link href="/get-early-access">
                <OutlineButton className="px-8 relative z-20">
                  Get Early Access
                </OutlineButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden mt-28">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full scale-100 md:scale-110 mt-28"
          >
            <source src="/featurely_intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
