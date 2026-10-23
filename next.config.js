/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Route handlers live under app/workspace/api/** so they are grouped with the
      // workspace feature, but the client calls them at /api/**. Map the public
      // path onto the grouped one.
      { source: '/api/:path*', destination: '/workspace/api/:path*' },
    ];
  },
};

module.exports = nextConfig;