// next.config.mjs
import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  // (keep any other Next options you already had here)
};

const pwaConfig = nextPwa({
  dest: 'public', // generates sw.js + workbox assets here
  register: true, // auto-inject service-worker registration
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  fallbacks: {
    document: '/_offline.html', // offline HTML fallback we created
  },
});

// Merge the two configs (pwaConfig is a function that returns a config)
export default pwaConfig(baseConfig);
