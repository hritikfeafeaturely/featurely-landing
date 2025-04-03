import { FeaturedPost } from "@/components/blogs/FeaturedPost";
import { BlogCategories } from "@/components/blogs/BlogCategories";
import { BlogPost } from "@/components/blogs/BlogPost";
import { Container } from "@/components/ui/container";
import blogData from "@/data/blog-posts.json";

const Blogs = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-neutral-950 py-16 ">
      <Container>
        <div className="w-full max-w-7xl">
          <div
            className="w-full max-w-4xl relative text-3xl md:text-4xl  my-8
          lg:text-5xl xl:text-[60px] leading-tight md:leading-tight lg:leading-[68px] font-geist text-transparent !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-start "
          >
            Blogs
          </div>

          <FeaturedPost />

          <BlogCategories />

          <div className="space-y-12">
            {blogData.blogPosts.map((post, index) => (
              <div key={post.slug}>
                <BlogPost data={post} />
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
