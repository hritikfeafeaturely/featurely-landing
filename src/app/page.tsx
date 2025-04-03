import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Partners } from "@/components/sections/Partners";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ElevateYourProduct } from "@/components/sections/ElevateYourProduct";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-pure-black text-white">
      
      <main className="w-full pt-16 md:pt-20 flex-1">
        <Hero />
        <Partners />
        <Features />
        <ProductShowcase />
        {/* <ElevateYourProduct /> */}
        {/* <TestimonialCarousel /> */}
        {/* <Pricing /> */}
      </main>
    </div>
  );
}
