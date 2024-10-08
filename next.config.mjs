/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_SOLANA_RPC_HOST: process.env.REACT_APP_SOLANA_RPC_HOST,
    REACT_APP_NETWORK: process.env.REACT_APP_NETWORK,
  },
};

export default nextConfig;
