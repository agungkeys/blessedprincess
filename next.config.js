module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
  publicRuntimeConfig: {
    API: process.env.BASE_API,
    ENV: process.env.BASE_ENV,
    HOST: process.env.BASE_HOST,
  },
}
