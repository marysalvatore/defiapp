/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
  // remotePatterns: [
  //   {
  //     protocol: 'https',
  //     hostname: 'tailwindui.com',
  //     pathname: '**',
  //   },
  // ],

};

export default nextConfig;