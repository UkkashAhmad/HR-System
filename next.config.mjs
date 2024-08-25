/** @type {import('next').NextConfig} */
const nextConfig = {
  // for adding external images 
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
