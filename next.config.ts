import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    unoptimized: true,
    domains: ['6752d87bf3754fcea7b9cea0.mockapi.io']
  }
  
};

export default nextConfig;
