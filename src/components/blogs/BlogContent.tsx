"use client";
import { useParams } from "next/navigation";
import blogData from '@/data/blog-posts.json';

interface BlogSectionProps {
  title: string;
  content: React.ReactNode;
  image?: string;
}

// Define type for blog section
type BlogSection = {
  title: string;
  content: string[];
  image?: string;
};

// Define types for related solutions that can have different shapes
type RelatedSolution = {
  title: string;
  description?: string;
  image?: string;
  content?: string[];
};

// Define type for blog content
type BlogContentType = {
  title: string;
  author: string;
  date: string;
  category: string;
  headerImage: string;
  sections: BlogSection[];
  relatedSolutions: RelatedSolution[];
};

// Type for the blogContents in our JSON
type BlogContentsType = {
  [key: string]: BlogContentType | Record<string, never>;
};

const BlogSection: React.FC<BlogSectionProps> = ({ title, content, image }) => {
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
        {title}
      </h2>
      {image && (
        <div className="overflow-hidden rounded-lg mb-6">
          <img
            src={image}
            alt={title}
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="text-gray-200 text-lg leading-relaxed space-y-6">
        {content}
      </div>
    </section>
  );
};

export const BlogContent = () => {
  const params = useParams();
  const slug = params?.id as string;
  
  // Get blog content from JSON data
  // Cast through unknown first to avoid TypeScript error
  const blogContents = blogData.blogContents as unknown as BlogContentsType;
  const blogContent = blogContents[slug] as BlogContentType | undefined;
  
  // Fallback content for posts without detailed content yet
  if (!blogContent || !blogContent.sections || blogContent.sections.length === 0) {
    return (
      <article className="text-white">
        <p className="text-lg">
          Full article content coming soon. Check back later for the complete post.
        </p>
      </article>
    );
  }

  return (
    <article className="text-white space-y-16">
      {blogContent.sections.map((section: BlogSection, index: number) => (
        <BlogSection
          key={index}
          title={section.title}
          image={section.image}
          content={
            <div className="space-y-6">
              {section.content.map((paragraph: string, pIndex: number) => (
                <div 
                  key={pIndex} 
                  className="content-paragraph"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          }
        />
      ))}
    </article>
  );
};
