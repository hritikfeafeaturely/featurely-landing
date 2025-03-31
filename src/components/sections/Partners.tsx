import Image from "next/image";
import { Container } from "../ui/container";

interface Partner {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function Partners() {
  const partners: Partner[] = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0be642b83cdf7fbed2bc2a7f4b63fb154c5fd253",
      alt: "Merlin",
      width: 127,
      height: 44,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d983e1c6fd7f687a35c85649b020565bbeec0c27",
      alt: "Pramata",
      width: 127,
      height: 44,
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-[60px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
