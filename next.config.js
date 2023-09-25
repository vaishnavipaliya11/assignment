/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env:{
    GOOGLE_CLIENT_ID:'219643582394-egd8tv3quv06el5h7oqbabctimjs5rn4.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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'
  }
}

module.exports = nextConfig
