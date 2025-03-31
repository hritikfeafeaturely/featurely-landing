import React from 'react';
// import FeaturelyLogo from "/public/icons/logo.svg";

export interface IconProps {
  iconName: keyof typeof IconFactory.Icons;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}
export class IconFactory {
  static Icons = {
    // featurelyLogo: FeaturelyLogo,
    
  };

  static getIcon(
    iconName: keyof typeof this.Icons,
    width?: number,
    height?: number,
    className?: string
  ) {
    const IconComponent = this.Icons[iconName] as React.ComponentType<{
      style?: React.CSSProperties;
      className?: string;
    }>;
    const style: {
      width?: number;
      height?: number;
    } = {};
    if (width) {
      style.width = width;
    }
    if (height) {
      style.height = height;
    }
    return <IconComponent style={style} className={className || ""} />;
  }
}
