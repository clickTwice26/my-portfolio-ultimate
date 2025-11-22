import type { NextConfig } from 'next';

// Removed invalid experimental.turbo boolean (TS2559). Minimal config only.
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
