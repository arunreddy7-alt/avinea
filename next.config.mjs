/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: "export",
  basePath: "/avinea-hadapsar-pune",
  assetPrefix: "/avinea-hadapsar-pune/",

  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
