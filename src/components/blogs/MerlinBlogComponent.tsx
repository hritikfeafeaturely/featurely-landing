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
    <article className="mt-8 sm:mt-12 lg:mt-8 px-4 sm:px-6 md:px-0">
      <img
        src={heroImage}
        alt={title}
        className="w-full h-auto max-w-4xl mt-6 md:mt-8 rounded-lg object-cover"
      />
      {sections.map((section, index) => (
        <section key={index} className="max-w-4xl mt-8 md:mt-12">
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 md:mb-6">
            {section.title}
          </h2>
          <div className="text-base sm:text-lg leading-relaxed">
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
};

export default MerlinBlogComponent;
