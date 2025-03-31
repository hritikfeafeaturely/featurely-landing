import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Container } from "@/components/ui/container";
import TestimonialCarousel from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Demo } from "@/components/Demo";
import { Partners } from "@/components/sections/Partners";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ElevateYourProduct } from "@/components/sections/ElevateYourProduct";
import { Footer } from "@/components/layouts/Footer";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-pure-black text-white">
      <Navbar />
      <main className="w-full pt-16 md:pt-20">
        <Hero />
        <Partners />
        <Features />
        <ProductShowcase />
        <ElevateYourProduct />
        {/* <TestimonialCarousel /> */}
        {/* <Pricing /> */}
        <Demo />
        <Footer />
      </main>
    </div>
  );
}
