/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = {
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig;
