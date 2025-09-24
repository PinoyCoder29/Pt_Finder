import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  // ... your existing config
  ignorePatterns: [
    'src/generated/**/*',
    '**/prisma/runtime/**/*'
  ]
}
module.exports = {
  eslint: {
    ignoreDuringBuilds: false, // keep linting enabled
    dirs: ['src', 'pages', 'components'], // only lint your source directories
  },
}