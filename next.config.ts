import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
