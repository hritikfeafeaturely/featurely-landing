import { FeaturedPost } from "@/components/blogs/FeaturedPost";
import { BlogCategories } from "@/components/blogs/BlogCategories";
import { BlogPost } from "@/components/blogs/BlogPost";
import { Container } from "@/components/ui/container";
import blogData from '@/data/blog-posts.json';

const Blogs = () => {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-neutral-950 py-16 ">
      <Container>
        <div className="w-full max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white text-start my-16">
            Blogs
          </h1>

          <FeaturedPost />

          <BlogCategories />

          <div className="space-y-12">
            {blogData.blogPosts.map((post, index) => (
              <div key={post.slug}>
                <BlogPost 
                  data={post}
                />
                {index < blogData.blogPosts.length - 1 && (
                  <div className="w-full h-px bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Blogs;
