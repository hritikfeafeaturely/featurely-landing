import blogData from '@/data/blog-posts.json';
import Link from 'next/link';

export const FeaturedPost = () => {
  const { category, title, author, content, imageSrc, imageAlt, slug } = blogData.featuredPost;
  
  // Format content with line breaks
  const formattedContent = content.split('\n\n').map((paragraph, index) => (
    <p key={index} className={index > 0 ? 'mt-4' : ''}>
      {paragraph}
    </p>
  ));

  return (
    <article className="w-full rounded-2xl my-12">
      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="flex-1 lg:max-w-[50%]">
          <div className="flex flex-col text-white">
            <div className="text-gray-100 text-lg font-medium">{category}</div>
            <Link href={`/blogs/${slug}`} className="group">
              <h1 className="text-3xl md:text-4xl font-medium mt-4 group-hover:text-purple-400 transition-colors">
                {title}
              </h1>
            </Link>
            <div className="flex items-center gap-2 mt-4 text-xl">
              <div className="w-2 h-px bg-gray-200" />
              <div>{author}</div>
            </div>
            <div className="mt-6 text-base leading-relaxed">
              {formattedContent}
            </div>
            <Link 
              href={`/blogs/${slug}`}
              className="text-xl font-medium mt-6 text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
            >
              Read More <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 lg:max-w-[50%]">
          <Link href={`/blogs/${slug}`} className="block hover:opacity-90 transition-opacity">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};
