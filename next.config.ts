import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/AaramFusion",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;