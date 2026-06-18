import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "psychologie-chamarina.at",
          },
        ],
        destination: "https://www.psychologie-chamarina.at/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
