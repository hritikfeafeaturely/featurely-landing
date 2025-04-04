import Link from "next/link";

interface BlogPost {
  title: string;
  author: string;
  category: string;
  date?: string;
}

interface BlogHeaderProps {
  blogPost: BlogPost;
}

export const BlogHeader = ({ blogPost }: BlogHeaderProps) => {
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