import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  experimental: {
    // serverActions removed as it's no longer a valid experimental option
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    domains: ['6752d87bf3754fcea7b9cea0.mockapi.io']
  }
};

export default nextConfig;
