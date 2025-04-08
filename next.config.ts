import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/((?!$|all|favicon\\.png|[\\w-]+$).*)",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
