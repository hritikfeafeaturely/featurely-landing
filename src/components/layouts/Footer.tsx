import { Container } from "../ui/container";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "#",
      src: "/facebookIcon.svg",
      alt: "Facebook",
    },
    {
      href: "#",
      src: "/instaIcon.svg",
      alt: "Instagram",
    },
    {
      href: "#",
      src: "/linkedinIcon.svg",
      alt: "LinkedIn",
    },
    {
      href: "#",
      src: "/XIcon.svg",
      alt: "X",
    },
  ];
  return (
    <footer className="w-full py-8  bg-pure-black">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8">
          <div className="text-white text-sm md:text-base font-light">
            @ 2025, Featurely AI
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                aria-label={link.alt}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-8 text-sm md:text-base text-white font-light">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
