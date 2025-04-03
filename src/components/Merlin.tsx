import MerlinBlogComponent from "./blogs/MerlinBlogComponent";

const Merlin = () => {
  const blogData = {
    title:
      "How Merlin Reduced Product Iteration Time and Built with Confidence Using Featurely",
    date: "March 00, 2025",
    heroImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd264ae24cdc4a003eca784deb3ba2618a45bf3d",
    sections: [
      {
        title: "Company Overview",
        content: [
          "Merlin is an AI-powered ERP for construction, helping material managers, site operators, and project teams streamline procurement, operations, and project management. A Y Combinator-backed startup from the Summer '24 batch, Merlin is scaling fast, acquiring customers, and refining its product for real-world enterprise users.",
          "But there was a challenge: Merlin's team wasn't the primary user of their own product. They needed a way to ensure their designs and workflows resonated with construction professionals—without waiting for real-world feedback.",
        ],
      },
      {
        title:
          "The Challenge: Building for Users They Couldn't Directly Access",
        content: [
          "Merlin's biggest hurdle was designing for construction professionals—material managers, site supervisors, and operations teams who wear hard hats, not headsets. Since the Merlin team wasn't their own end-user, they needed a way to predict user behavior and ensure usability before shipping features.",
          "Key Challenges Merlin Faced:",
          "Lack of direct access to users – Their primary audience was construction industry professionals.",
          "Preventing costly failures in production – They wanted to test usability before shipping.",
          "Reducing iteration cycles – They needed faster, more reliable feedback on designs.",
          "Running a lean team – They did not want to hire more designers or product managers.",
        ],
      },
      {
        title: 'The Solution: Featurely as a "CI/CD for Product"',
        content: [
          "Merlin integrated Featurely into their product development workflow, using it at two critical stages:",
          "At the Design Stage",
          "Figma wireframes were tested using Featurely's synthetic agents, miming real user behavior.",
          "AI-driven feedback helped refine designs before writing any code.",
          "At the Staging Step",
          "Before deployment, Featurely ran usability tests in the staging environment to ensure workflows worked smoothly.",
          "This helped de-risk new features before launch.",
          "\"We don't ship a feature unless it's gone through Featurely.\"",
          "Featurely's AI-powered testing helped validate designs before development started, ensuring each feature was built with real user behavior in mind.",
        ],
      },
      {
        title:
          "The Results: Faster Development, Higher Confidence, and a Leaner Team",
        content: [
          "Reduced Iteration Cycles",
          "✅ Faster Feedback Loop – No need to wait for customer feedback post-launch.",
          "✅ More First-Time Right Features – Fewer rounds of rework and UX changes.",
          "Higher Product Confidence",
          "✅ Featurely's AI agents highlighted usability issues early.",
          "✅ Merlin's team knew exactly what to fix before writing code.",
          "Lean Product Team, Maximum Efficiency",
          '✅ No need for a dedicated PM – Featurely acted as a "virtual product manager."',
          "✅ Freed up engineering time – Engineers focused on building, not reworking.",
          '"Featurely is like Balsamiq if it could talk to me."',
          "By using Featurely, Merlin avoided the risk of launching unusable features, reduced development waste, and ensured enterprise customers got a frictionless experience from day one.",
        ],
      },
      {
        title: "Why Other Startups Should Use Featurely",
        content: [
          "Merlin's experience shows how Featurely empowers startups to build with confidence—even when they don't have direct access to users.",
          '"Featurely fits the bill for any early-stage company that doesn\'t have the luxury of time or a full-fledged UX research team. It helps us ship the right product the first time."',
          "Today, Merlin continues to use Featurely across multiple workflows, from materials procurement to project management, ensuring each user persona gets the best possible experience.",
          "Want to ship the right features faster—without wasting time on endless iterations? Try Featurely today and build with confidence.",
        ],
      },
    ],
  };

  return (
    <div className="text-white">
      {/* Add your custom Merlin case study content here */}
      <MerlinBlogComponent {...blogData} />
    </div>
  );
};

export default Merlin;
