import { Container } from "@/components/ui/container";
import blogData from "@/data/blog-posts.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogContent } from "@/components/blogs/BlogContent";
import Merlin from "@/components/Merlin";
import DeathOfGuessworkComponent from "@/components/blogs/DeathOfGuessworkComponent";
import HiddenCostComponent from "@/components/blogs/HiddenCostComponent";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}


type BlogPost = {
  title: string;
  author: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  slug: string;
  date?: string;
};


type BlogContentData = {
  title: string;
  author: string;
  date: string;
  category: string;
  headerImage: string;
  sections: Array<{
    title: string;
    content: string[];
    image?: string;
  }>;
  relatedSolutions: Array<{
    title: string;
    description: string;
    image: string;
  }>;
};

// Generate static params for all blog posts to improve performance
export async function generateStaticParams() {
  const allPosts = [...blogData.blogPosts, blogData.featuredPost];
  return allPosts.map((post) => ({
    id: post.slug,
  }));
}

// Back to blogs link component
const BackToBlogs = () => (
  <div className="mb-8">
    <Link
      href="/blogs"
      className="text-gray-300 hover:text-white transition-colors text-lg inline-flex items-center"
    >
      <span className="mr-2">←</span> Back to Blogs
    </Link>
  </div>
);

// Blog header component
const BlogHeader = ({ blogPost }: { blogPost: BlogPost }) => {
  // Format the date if available
  const formattedDate = blogPost.date
    ? new Date(blogPost.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "March 15, 2023"; // Fallback date

  return (
    <>
      <div className="text-white text-lg sm:text-xl font-normal mb-8 pl-4 border-l-4 border-purple-600">
        <Link href="/blogs" className="hover:text-purple-400 transition-colors">
          Blogs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{blogPost.category}</span>
      </div>

      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium mb-8 leading-tight pr-4 lg:pr-16">
        {blogPost.title}
      </h1>

      <div className="flex items-center gap-3.5 text-base text-white font-light mb-16">
        <div className="w-px h-5 bg-purple-500" />
        <time>{formattedDate}</time>
        <div className="w-px h-5 bg-purple-500" />
        <span>{blogPost.author}</span>
      </div>
    </>
  );
};

// Wrapper for custom blog components
const BlogWrapper = ({
  children,
  blogPost,
  showHeroImage = false,
  fullContent,
}: {
  children: React.ReactNode;
  blogPost: BlogPost;
  showHeroImage?: boolean;
  fullContent?: BlogContentData;
}) => (
  <div className="bg-neutral-950 min-h-screen">
    <Container className="py-16 lg:py-24">
      <div className="flex flex-col max-w-5xl mx-auto">
        <BackToBlogs />
        <BlogHeader blogPost={blogPost} />

        {showHeroImage && (
          <div className="overflow-hidden rounded-xl mb-12 lg:mb-16">
            <img
              src={fullContent?.headerImage || blogPost.imageSrc}
              alt={blogPost.imageAlt || "Blog post header image"}
              className="w-full object-cover h-auto aspect-[1.8/1]"
            />
          </div>
        )}

        {children}

        {/* {fullContent?.relatedSolutions && fullContent.relatedSolutions.length > 0 && (
          <section className="bg-white w-full rounded-xl mt-16 pt-12 pb-10 px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-medium text-center mb-12">
              Featured Solutions
            </h2>
        
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {fullContent.relatedSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <h3 className="text-xl md:text-2xl font-medium mb-6">
                    {solution.title}
                  </h3>
                  <div className="h-48 flex items-center justify-center mb-6">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="max-h-full w-auto"
                    />
                  </div>
                  <p className="text-lg">{solution.description}</p>
                </div>
              ))}
            </div>
          </section>
        )} */}
      </div>
    </Container>
  </div>
);

// Mapping of custom slugs to their respective components
const CUSTOM_BLOG_COMPONENTS: Record<string, React.FC> = {
  "merlin-case-study": Merlin,
  "death-of-guesswork": DeathOfGuessworkComponent,
  "hidden-cost-of-skipping-ux-research": HiddenCostComponent,
};

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  // Find the blog post by slug
  const post =
    blogData.blogPosts.find((post) => post.slug === params.id) ||
    (blogData.featuredPost.slug === params.id ? blogData.featuredPost : null);

  // If post doesn't exist, return 404
  if (!post) {
    notFound();
  }

  // Cast post to BlogPost type
  const blogPost = post as BlogPost;

  // Get detailed blog content if available
  const fullContent = blogData.blogContents[
    params.id as keyof typeof blogData.blogContents
  ] as BlogContentData | undefined;

  // Check if this is a custom blog with a dedicated component
  const CustomComponent = CUSTOM_BLOG_COMPONENTS[params.id];
  if (CustomComponent) {
    return (
      <BlogWrapper blogPost={blogPost} fullContent={fullContent}>
        <CustomComponent />
      </BlogWrapper>
    );
  }

  // For standard blog posts
  return (
    <BlogWrapper
      blogPost={blogPost}
      fullContent={fullContent}
      showHeroImage={true}
    >
      <div className="pr-4 lg:pr-16">
        <BlogContent />
      </div>
    </BlogWrapper>
  );
};

export default BlogDetailPage;
