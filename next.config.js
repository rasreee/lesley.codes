
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
   // by default, if you customize webpack config, they switch back to version 4.
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false // the solution
    };

    return config;
  }
};