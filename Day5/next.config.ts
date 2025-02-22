// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;






// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"], // Sanity ke images ke liye domain allow karna zaroori hai
//   },
// };

// export default nextConfig;






/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true, 
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: ["cdn.sanity.io"], // Sanity ke images ke liye domain allow karna zaroori hai
  },
};

module.exports = nextConfig;
