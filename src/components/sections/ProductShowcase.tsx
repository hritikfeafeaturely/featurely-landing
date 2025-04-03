"use client";
import { Container } from "../ui/container";
import { FeatureItem } from "../ui/feature-item";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

export const ProductShowcase: React.FC = () => {
  const features = [
    {
      iconSrc: "/web.svg",
      iconAlt: "Web App Interface",
      description: "Navigate your prototype or web app like real users",
    },
    {
      iconSrc: "/confusionpoint.svg",
      iconAlt: "Confusion Points",
      description: "Reveal usability friction and confusion points",
    },
    {
      iconSrc: "/syntheticusers.svg",
      iconAlt: "User Insights",
      description: "Output decision-ready insights - backed by user psychology",
    },
  ];
  const features2 = [
    {
      title:
        "Simulate real users. Understand their behavior. Improve your product.",
      subtitle:
        "Featurely gives you behaviorally accurate, AI-powered user simulations that:",
      items: [
        {
          iconSrc: "/web.svg",
          iconAlt: "Interface Navigation",
          description: "Navigate your prototype or web app like real users",
        },
        {
          iconSrc: "/confusionpoint.svg",
          iconAlt: "Friction Points",
          description: "Reveal usability friction and confusion points",
        },
        {
          iconSrc: "/syntheticusers.svg",
          iconAlt: "Decision Insights",
          description:
            "Output decision-ready insights - backed by user psychology",
        },
      ],
      footer:
        "Watch their journeys. Read their thoughts. Discover what's working and what's not.",
    },
    {
      title: "Turn feedback into design upgrades automatically.",
      subtitle:
        "Featurely doesn't just tell you what's broken. It helps you fix it.:",
      items: [
        {
          iconSrc: "/wireframeIcon.svg",
          iconAlt: "Wireframe Diffs",
          description: "Wireframe diffs and design suggestions",
        },
        {
          iconSrc: "/narration.svg",
          iconAlt: "Visual Annotations",
          description:
            'Visual annotations that explain "why" something isn\'t working',
        },
        {
          iconSrc: "/export.svg",
          iconAlt: "Design Export",
          description: "Export changes to Figma or push to your design system",
        },
      ],
      footer:
        "It's like having a senior UX researcher embedded in your product team.",
    },
    {
      title: "Chat with synthetic users to learn what they're thinking.",
      subtitle: "Get deeper insights into user behavior and expectations:",
      items: [
        {
          iconSrc: "/usersIcon.svg",
          iconAlt: "User Chat",
          description: "Chat with synthetic users mid-flow or post-task",
        },
        {
          iconSrc: "/bulbNew.svg",
          iconAlt: "User Goals",
          description: 'Ask "What were you trying to accomplish?"',
        },
        {
          iconSrc: "/flowNew.svg",
          iconAlt: "Narrative Insights",
          description:
            "Get narrative insights that inform workflow and strategy",
        },
      ],
      footer: "You'll stop guessing user intent and start building around it.",
    },
  ];

  // State for scroll-based animations
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Use Framer Motion's scroll tracking for smoother animations
  const { scrollYProgress, scrollY } = useScroll({
    target: featuresRef,
    offset: ["start", "end"],
  });

  // Track scroll direction
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    const diff = current - previous;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  // Transform scrollYProgress to feature index
  const featureIndexProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, features2.length - 0.001]
  );

  // Update active feature index based on scroll
  useMotionValueEvent(featureIndexProgress, "change", (latest) => {
    const newIndex = Math.min(features2.length - 1, Math.floor(latest));

    if (newIndex !== activeFeatureIndex) {
      setActiveFeatureIndex(newIndex);
    }

    // Set overall progress (0-1 for entire section)
    setProgress(scrollYProgress.get());
  });

  // Calculate indicator position for the tab bar (0, 1, or 2)
  const tabIndicatorX = useTransform(featureIndexProgress, (val) => val);

  // Smoother parallax effect for background
  const { scrollYProgress: backgroundScrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });

  // Calculate exact progress for the tab bar indicator
  const featureProgressPercentage = (progress * features2.length) % 1;
  const currentTabProgress = activeFeatureIndex / (features2.length - 1);
  const tabBarProgress = progress; // Overall progress between 0-1

  return (
    <>
      {/* <section className="w-full py-16 md:py-24 lg:py-32 flex items-center">
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
              {
                " Watch their journeys. Read their thoughts. Discover what's working and what's not."
              }
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
      </section> */}

      {/* Advanced Features Section with Scroll Animation */}
      <section
        ref={featuresRef}
        className="relative min-h-screen py-20"
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        <div
          className="sticky top-0 left-0 h-screen flex items-center justify-center"
          style={{
            perspective: "700px",
            transformStyle: "preserve-3d",
          }}
        >
          <Container>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeatureIndex}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    filter: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: scrollDirection === "down" ? -20 : 20,
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                style={{
                  opacity: Math.min(
                    1,
                    Math.max(
                      0,
                      1 - Math.abs(featureProgressPercentage - 0.5) * 2
                    )
                  ),
                }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-3xl lg:text-5xl leading-tight font-geist text-transparent !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mb-4">
                  {features2[activeFeatureIndex].title}
                </h2>
                <p className="text-[#98949E] text-base md:text-lg font-normal text-center mt-4 md:mt-6 max-w-2xl mx-auto mb-10">
                  {features2[activeFeatureIndex].subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features2[activeFeatureIndex].items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="transform hover:scale-105 transition-transform duration-300"
                    >
                      <FeatureItem
                        iconSrc={item.iconSrc}
                        iconAlt={item.iconAlt || ""}
                      >
                        {item.description}
                      </FeatureItem>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[#98949E] text-base md:text-lg font-normal text-center mt-4 md:mt-6 max-w-2xl mx-auto mb-10">
                  {features2[activeFeatureIndex].footer}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Tab Bar Indicator with Framer Motion scroll tracking */}
            <div className="w-full h-[3px] bg-[#4D4D4D] mb-16 relative flex rounded-full overflow-hidden">
              {/* Tab indicator that moves based on scroll */}
              <motion.div
                className="absolute top-0 h-full bg-[#928EEB] z-10"
                style={{
                  width: `${100 / features2.length}%`,
                  left: useTransform(
                    tabIndicatorX,
                    (val) => `${(val * 100) / features2.length}%`
                  ),
                  opacity: 1,
                }}
              />

              {/* Fixed tab segments */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="h-full flex-1 relative"
                  style={{
                    opacity: useTransform(
                      tabIndicatorX,
                      [index - 0.5, index, index + 0.5],
                      [0.4, 0.7, 0.4]
                    ),
                    scale: useTransform(
                      tabIndicatorX,
                      [index - 0.2, index, index + 0.2],
                      [1, 1.05, 1]
                    ),
                  }}
                />
              ))}
            </div>
          </Container>
        </div>
        {/* Spacer div with scroll snap points for better scrolling */}
        <div ref={scrollRef} className="relative">
          {features2.map((_, index) => (
            <div
              key={index}
              className="h-screen"
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                scrollBehavior: "smooth",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};
