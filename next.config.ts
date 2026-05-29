import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['10.0.0.101', '10.0.0.102', '10.0.0.100', '192.168.1.16', 'local://*', '*.local'],
};

export default nextConfig;
