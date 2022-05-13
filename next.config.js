const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  productionBrowserSourceMaps:
    process.env.PRODUCTION_BROWSER_SOURCE_MAPS === 'true',
  excludeFile: (str) => /\*.{spec,test}.{tsx,ts}/.test(str),
}

module.exports = withPlugins([[withBundleAnalyzer]], config)
