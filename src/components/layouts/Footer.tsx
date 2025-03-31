import { Container } from "../ui/container";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8">
          <div className="text-white text-sm md:text-base font-light">
            @ 2025, Featurely AI
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Social Media Link" className="hover:opacity-80 transition-opacity">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/1dfc0db1d7a9ba7c8565b34521d0123c79023f4b?placeholderIfAbsent=true"
                alt="Social Media"
                className="w-5 h-5"
              />
            </a>
            <a href="#" aria-label="Social Media Link" className="hover:opacity-80 transition-opacity">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/c59333fd807768b2226777b9d60f70be44e2ce1a?placeholderIfAbsent=true"
                alt="Social Media"
                className="w-5 h-5"
              />
            </a>
            <a href="#" aria-label="Social Media Link" className="hover:opacity-80 transition-opacity">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/024ea3c14218b70cb70242b92537ef3f3af507da?placeholderIfAbsent=true"
                alt="Social Media"
                className="w-5 h-5"
              />
            </a>
            <a href="#" aria-label="Social Media Link" className="hover:opacity-80 transition-opacity">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d1565a3d38674b2f92e823900af9b856/c603de7f0d2a86fe5441547a1776a9eee95f760b?placeholderIfAbsent=true"
                alt="Social Media"
                className="w-5 h-5"
              />
            </a>
          </div>

          <nav className="flex items-center gap-4 md:gap-8 text-sm md:text-base text-white font-light">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};
