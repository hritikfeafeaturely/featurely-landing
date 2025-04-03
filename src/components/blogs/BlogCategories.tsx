import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface CategoryButtonProps {
  active?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}

const CategoryButton = ({
  active,
  children,
  disabled,
}: CategoryButtonProps) => {
  return (
    <Button
      className={cn(
        "px-4 py-2 rounded-full text-white",
        active
          ? "bg-purple-900/80 hover:bg-purple-900/90"
          : "bg-transparent hover:bg-purple-900/40",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export const BlogCategories = () => {
  return (
    <div className="flex flex-wrap items-start justify-start w-full max-w-3xl gap-4 my-16 text-xl md:text-2xl text-gray-100 font-medium">
      <CategoryButton active>All</CategoryButton>
      <CategoryButton disabled={true}>Latest</CategoryButton>
      <CategoryButton disabled={true}>Product</CategoryButton>
      <CategoryButton disabled={true}>UX Research</CategoryButton>
    </div>
  );
};
