import Link from "next/link";

interface BlogPostData {
  title: string;
  author: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  slug: string;
  date?: string;
}

interface BlogPostProps {
  data: BlogPostData;
}

export const BlogPost = ({ data }: BlogPostProps) => {
  const { title, author, content, imageSrc, imageAlt, slug } = data;
  
  return (
    <article className={`flex w-full gap-8 py-12 max-md:flex-col max-md:py-8`}>
      <div className="flex-1 min-w-0 lg:max-w-[60%]">
        <div className="flex flex-col text-white">
          <Link href={`/blogs/${slug}`} className="group">
            <h2 className="text-3xl font-medium md:text-4xl group-hover:text-purple-400 transition-colors">
              {title}
            </h2>
          </Link>
          <div className="flex items-center gap-2 mt-4 text-xl">
            <div className="w-2 h-px bg-[#ededed]" />
            <div>{author}</div>
          </div>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            {content}
          </p>
          <Link 
            href={`/blogs/${slug}`}
            className="mt-6 text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
          >
            Read More <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-[40%] w-full">
        <Link href={`/blogs/${slug}`} className="block hover:opacity-90 transition-opacity">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
      </div>
    </article>
  );
};
