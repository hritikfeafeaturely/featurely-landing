"use client";

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import blogData from "@/data/blog-posts.json";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
import Merlin from "@/components/Merlin";
import DeathOfGuessworkComponent from "@/components/blogs/DeathOfGuessworkComponent";
import HiddenCostComponent from "@/components/blogs/HiddenCostComponent";
import BiasesInUxResearchComponent from "@/components/blogs/BiasesInUxResearchComponent";
import { BlogWrapper } from "@/components/blogs/BlogWrapper";
import { BlogPost } from "@/components/blogs/types";

// Define valid blog slugs as a type
type ValidBlogSlug = "merlin-case-study" | "death-of-guesswork" | "hidden-cost-of-skipping-ux-research" | "biases-in-ux-research";

// Mapping of slugs to their respective components
const BLOG_COMPONENTS: Record<ValidBlogSlug, React.FC> = {
  "merlin-case-study": Merlin,
  "death-of-guesswork": DeathOfGuessworkComponent,
  "hidden-cost-of-skipping-ux-research": HiddenCostComponent,
  "biases-in-ux-research": BiasesInUxResearchComponent,
};

// Direct page component using usePathname
export default function BlogPage() {
  // Get the current pathname
  const pathname = usePathname();
  
  // Extract the slug from the pathname
  const slugMatch = pathname.match(/\/blogs\/(.+)$/);
  const slug = slugMatch ? slugMatch[1] : null;
  
  // If slug wasn't found in the pathname, return 404
  if (!slug) {
    return notFound();
  }
  
  // Check if the requested slug exists in our components mapping
  if (!Object.keys(BLOG_COMPONENTS).includes(slug)) {
    return notFound();
  }
  
  // Find the blog post data by slug
  const post =
    blogData.blogPosts.find((post) => post.slug === slug) ||
    (blogData.featuredPost.slug === slug ? blogData.featuredPost : null);

  // If post data doesn't exist, return 404
  if (!post) {
    return notFound();
  }

  // Get the component for this slug (with type assertion)
  const BlogComponent = BLOG_COMPONENTS[slug as ValidBlogSlug];
  
  return (
    <BlogWrapper blogPost={post as BlogPost}>
      <BlogComponent />
    </BlogWrapper>
  );
}
