/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// };
