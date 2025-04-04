"use client";

import React from "react";
import blogData from "@/data/blog-posts.json";

const BiasesInUxResearchComponent: React.FC = () => {
  // Get the content for this specific blog
  const blogContent = blogData.blogContents["biases-in-ux-research"];

  if (!blogContent) {
    return (
      <div className="text-white">
        <p>Content for this blog post is not available.</p>
      </div>
    );
  }

  return (
    <article className="text-white">
      {/* Main content sections */}
      {blogContent.sections.map((section, index) => (
        <section key={index} className="mt-12 md:mt-16">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            {section.title}
          </h2>

          {section.image && (
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={section.image}
                alt={section.title}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          <div className="text-gray-200 text-lg leading-relaxed space-y-6">
            {section.content.map((paragraph, pIndex) => (
              <div
                key={pIndex}
                className="content-paragraph"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </section>
      ))}



  
    </article>
  );
};

export default BiasesInUxResearchComponent;
