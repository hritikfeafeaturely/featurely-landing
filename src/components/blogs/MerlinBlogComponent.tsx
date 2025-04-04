interface BlogContentProps {
  title: string;
  date: string;
  heroImage: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const MerlinBlogComponent = ({
  title,
  heroImage,
  sections,
}: BlogContentProps) => {
  return (
    <article className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-auto rounded-lg object-cover mb-8 md:mb-12"
        />
        
        {sections.map((section, index) => (
          <section key={index} className="mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 md:mb-6">
              {section.title}
            </h2>
            <div className="text-base sm:text-lg leading-relaxed text-gray-200 space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default MerlinBlogComponent;
