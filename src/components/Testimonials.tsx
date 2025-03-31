// import { Container } from "./ui/container";
//original version

// export const Testimonials = () => {
//   return (
//     <section className="bg-muted-periwinkle w-full min-h-screen flex flex-col items-center justify-center py-16">
//       <Container>
//         <div className="flex w-full flex-col items-center">
//           <h2 className="text-neutral-950 text-[32px] md:text-[40px] font-medium">
//             Testimonials
//           </h2>
//           <p className="text-stormy-gray text-base font-light mt-[13px]">
//             Voices of Innovation, Success, and Trust.
//           </p>
//           <div className="w-full mt-10 md:mt-[106px]">
//             <div className="gap-5 flex flex-col md:flex-row">
//               <div className="w-full md:w-6/12">
//                 <div className="bg-dark-grape flex grow flex-col items-stretch text-white font-light w-full px-5 md:px-9 py-8 md:py-12 rounded-xl">
//                   <div className="text-lg">Logo</div>
//                   <img
//                     src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/e8ab717e7086a1a9253989965041e4c1586f27aa?placeholderIfAbsent=true"
//                     alt="Quote mark"
//                     className="aspect-[1] object-contain w-4 mt-10 md:mt-[79px]"
//                   />
//                   <blockquote className="text-xl mt-[17px]">
//                     Featurely changed our product development pace drastically.
//                     Instant user insights are a game-changer.
//                   </blockquote>
//                   <cite className="text-base mt-[27px]">
//                     <span className="font-normal text-pastel-lilac">
//                       - Founder at{" "}
//                     </span>
//                     <span className="font-normal">Tech Startup</span>
//                   </cite>
//                 </div>
//               </div>
//               <div className="w-full md:w-6/12">
//                 <div className="bg-misty-cloud flex grow flex-col text-base text-neutral-950 font-light w-full px-5 md:px-9 py-8 md:py-10 rounded-xl">
//                   <div className="text-stormy-gray">Logo</div>
//                   <img
//                     src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/cebf215dc9c7c1f10a24395c2872ad286ae764be?placeholderIfAbsent=true"
//                     alt="Quote mark"
//                     className="aspect-[1] object-contain w-4 mt-10 md:mt-[94px]"
//                   />
//                   <blockquote className="text-lg mt-[17px]">
//                     Featurely changed our product development pace drastically.
//                     Instant user insights are a game-changer
//                   </blockquote>
//                   <cite className="mt-[17px]">
//                     <span className="font-normal text-stormy-gray">
//                       - Founder at
//                     </span>
//                     <span className="font-normal"> Tech Startup</span>
//                   </cite>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/4a98b27e4e1439c53ccc64232edb11f695bfc12b?placeholderIfAbsent=true"
//             alt="Testimonial decoration"
//             className="object-contain w-full max-w-[456px] mt-10 md:mt-[60px]"
//           />
//         </div>
//       </Container>
//     </section>
//   );
// };

////chatgpt version

// "use client"

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";

// const testimonials = [
//   {
//     id: 1,
//     quote:
//       "Featurely changed our product development pace drastically. Instant user insights are a game-changer.",
//     name: "Sarah Johnson",
//     title: "Founder at Tech Startup",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     quote:
//       "The platform simplified our feedback collection process and helped us iterate faster than ever before.",
//     name: "Michael Chen",
//     title: "CTO at InnovateCorp",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 3,
//     quote:
//       "Our team's productivity increased by 40% after implementing this solution. Highly recommended!",
//     name: "Jessica Williams",
//     title: "Product Manager at NextGen",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 4,
//     quote:
//       "The insights we gained transformed our approach to customer experience. A must-have tool.",
//     name: "David Rodriguez",
//     title: "CEO at FutureTech",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
// ];

// "use client"

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";

// const testimonials = [
//   {
//     id: 1,
//     quote:
//       "Featurely changed our product development pace drastically. Instant user insights are a game-changer.",
//     name: "Sarah Johnson",
//     title: "Founder at Tech Startup",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     quote:
//       "The platform simplified our feedback collection process and helped us iterate faster than ever before.",
//     name: "Michael Chen",
//     title: "CTO at InnovateCorp",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 3,
//     quote:
//       "Our team's productivity increased by 40% after implementing this solution. Highly recommended!",
//     name: "Jessica Williams",
//     title: "Product Manager at NextGen",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 4,
//     quote:
//       "The insights we gained transformed our approach to customer experience. A must-have tool.",
//     name: "David Rodriguez",
//     title: "CEO at FutureTech",
//     avatar: "/placeholder.svg?height=100&width=100",
//   },
// ];

// export default function TestimonialCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const handleMouseEnter = () => setIsAutoPlaying(false);
//   const handleMouseLeave = () => setIsAutoPlaying(true);

//   return (
//     <div className="bg-mutedPeriwinkle min-h-screen flex flex-col justify-center items-center px-6">
//       <div className="text-center mb-12">
//         <h2 className="text-5xl font-bold text-black">Testimonials</h2>
//         <p className="text-xl text-gray-700">Voices of Innovation, Success, and Trust.</p>
//       </div>
//       <div className="relative flex space-x-8 items-center">
//         <AnimatePresence mode="wait">
//           {[currentIndex, (currentIndex + 1) % testimonials.length].map((index, position) => (
//             <motion.div
//               key={testimonials[index].id}
//               initial={{ opacity: 0, scale: 0.8, x: position === 0 ? "-50%" : "50%" }}
//               animate={{ opacity: 1, scale: position === 0 ? 1 : 0.85, x: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className={cn(
//                 "relative w-[400px] bg-white rounded-xl shadow-lg p-8",
//                 position === 1 && "opacity-50"
//               )}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span className="text-4xl font-serif text-gray-400">"</span>
//               <p className="text-lg text-gray-800 mb-4">{testimonials[index].quote}</p>
//               <div className="flex items-center">
//                 <Avatar className="h-14 w-14 mr-4">
//                   <AvatarImage src={testimonials[index].avatar} alt={testimonials[index].name} />
//                   <AvatarFallback>{testimonials[index].name.charAt(0)}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold text-black">{testimonials[index].name}</p>
//                   <p className="text-gray-600">{testimonials[index].title}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//       <div className="flex justify-center mt-8 space-x-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={cn(
//               "w-3 h-3 rounded-full transition-colors duration-300",
//               index === currentIndex ? "bg-royalViolet" : "bg-mutedPeriwinkle"
//             )}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

//new version

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Simple replacement for cn utility function
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const testimonials = [
  {
    id: 1,
    quote:
      "Featurely changed our product development pace drastically. Instant user insights are a game-changer.",
    name: "Sarah Johnson",
    title: "Founder at Tech Startup",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "The platform simplified our feedback collection process and helped us iterate faster than ever before.",
    name: "Michael Chen",
    title: "CTO at InnovateCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "Our team's productivity increased by 40% after implementing this solution. Highly recommended!",
    name: "Jessica Williams",
    title: "Product Manager at NextGen",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    quote:
      "The insights we gained transformed our approach to customer experience. A must-have tool.",
    name: "David Rodriguez",
    title: "CEO at FutureTech",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Variants for animation
  const cardVariants = {
    focus: {
      opacity: 1,
      scale: 1,
      x: 0,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    unfocus: {
      opacity: 0.5,
      scale: 0.85,
      x: "50%",
      zIndex: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      x: "-100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-black">Testimonials</h2>
        <p className="text-xl text-gray-700">
          Voices of Innovation, Success, and Trust.
        </p>
      </div>
      <div className="relative flex space-x-8 items-center">
        <AnimatePresence mode="popLayout">
          {[currentIndex, (currentIndex + 1) % testimonials.length].map(
            (index, position) => (
              <motion.div
                key={testimonials[index].id}
                variants={cardVariants}
                initial="unfocus"
                animate={position === 0 ? "focus" : "unfocus"}
                exit="exit"
                className={cn(
                  "absolute w-[400px] bg-white rounded-xl shadow-lg p-8",
                  position === 0 ? "z-10" : "z-1"
                )}
                style={{
                  left: position === 0 ? 0 : "calc(100% + 2rem)",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-4xl font-serif text-gray-400">"</span>
                <p className="text-lg text-gray-800 mb-4">
                  {testimonials[index].quote}
                </p>
                <div className="flex items-center">
                  <Avatar className="h-14 w-14 mr-4">
                    <AvatarImage
                      src={testimonials[index].avatar}
                      alt={testimonials[index].name}
                    />
                    <AvatarFallback>
                      {testimonials[index].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-black">
                      {testimonials[index].name}
                    </p>
                    <p className="text-gray-600">{testimonials[index].title}</p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-300",
              index === currentIndex ? "bg-royalViolet" : "bg-mutedPeriwinkle"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
