import Image from "next/image";
import { Container } from "../ui/container";

export const ElevateYourProduct = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 flex items-center">
      <Container>
        <div className="flex flex-col items-center">
          <div className="relative w-full flex justify-center">
            <Image
              src="/brain.svg"
              alt="Brain Visualization"
              width={500}
              height={500}
              // className="w-full max-w-2xl h-auto"
              priority
            />
          </div>

          <div className="w-full max-w-3xl text-center  md:mt-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Elevate your product craft.
              <br className="hidden sm:block" />
              With speed and clarity
            </div>
          </div>

          <div className="w-full mt-10 md:mt-16 lg:mt-20">
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
