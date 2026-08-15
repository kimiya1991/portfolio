import type { NextConfig } from "next";

const repository = "portfolio";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubActions ? `/${repository}` : "",
  assetPrefix: isGitHubActions ? `/${repository}/` : "",
  turbopack: { root: process.cwd() },
};

export default nextConfig;
