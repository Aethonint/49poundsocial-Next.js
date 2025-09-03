/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
      images: {
    unoptimized: true, // <-- This disables optimization and fixes the error
  },
};

export default nextConfig;
