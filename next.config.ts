import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        pathname: "/api/v1/image/assets/**",
      },
    ],
  },
};

export default nextConfig;
