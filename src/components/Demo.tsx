"use client";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { OutlineButton } from "./ui/outline-button";
import { CalendlyButton } from "./ui/calendly-button";

export const Demo = () => {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 bg-pure-black">
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
              <div className="w-full md:w-3/5 lg:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Ship confidently. Iterate with insight. Build with purpose.
                </h2>
              </div>
              <div className="w-full md:w-2/5 lg:w-1/2">
                <div className="flex flex-col gap-4 md:gap-6">
                  <p className="text-[#98949E] text-base md:text-lg font-normal leading-relaxed">
                    Simulate your next user, find out what they really need, and
                    make better product decisions — instantly.
                  </p>
                  <div className="flex gap-4">
                    <CalendlyButton
                      url="https://calendly.com/d/cm2c-5q4-npt/help-shape-featurely"
                      text="Book a 15 Min Walkthrough"
                      className="self-start uppercase"
                    />
                    <Link href="/get-early-access">
                      <OutlineButton>Sign Up For Waitlist</OutlineButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-12 lg:mt-16 w-full">
              <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/afd168a840a1acf528909923e99e4126abe913f7?placeholderIfAbsent=true"
                  alt="Demo Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
