/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    // Explicitly set the workspace root to avoid multi-lockfile inference warnings
    root: __dirname,
  },
};

export default nextConfig;
