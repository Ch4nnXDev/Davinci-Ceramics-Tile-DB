import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",

  disable: process.env.NODE_ENV != 'production',
});

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "pub-c5416e4f14514e57abd44fd5fe547406.r2.dev",
      },
    ],
  },
};

export default withSerwist(nextConfig);
