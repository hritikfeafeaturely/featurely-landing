import { IconFactory } from "@/components/Icon/factory";

export interface IconProps {
  iconName: keyof typeof IconFactory.Icons;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

const Icon = ({ iconName, width, height, className }: IconProps) => {
  return IconFactory.getIcon(iconName, width, height, className);
};

export default Icon;
