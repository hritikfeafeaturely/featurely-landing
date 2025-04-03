interface CategoryButtonProps {
  active?: boolean;
  children: React.ReactNode;
}

const CategoryButton = ({ active, children }: CategoryButtonProps) => {
  return (
    <button
      className={`${
        active
          ? "bg-purple-900/80 px-6 py-2 rounded-full"
          : "hover:bg-purple-900/20 px-4 py-2 rounded-full"
      } transition-colors duration-200`}
    >
      {children}
    </button>
  );
};

export const BlogCategories = () => {
  return (
    <div className="flex flex-wrap items-start justify-start w-full max-w-3xl gap-4 my-16 text-xl md:text-2xl text-gray-100 font-medium">
      <CategoryButton active>All</CategoryButton>
      <CategoryButton>Latest</CategoryButton>
      <CategoryButton>Product</CategoryButton>
      <CategoryButton>UX Research</CategoryButton>
    </div>
  );
};
