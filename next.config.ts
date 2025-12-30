import type { NextConfig } from "next";

const subpath = process.env.BASEPATH

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.js',
  //       }
  //     }
  //   }
  // },
  basePath: subpath,
  images: { unoptimized: true }
};

export default nextConfig;
