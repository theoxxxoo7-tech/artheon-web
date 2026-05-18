/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // local /public/images/* are used by next/image automatically
  },
};

export default nextConfig;
