import type { NextConfig } from "next";

const repository = "portfolio";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
