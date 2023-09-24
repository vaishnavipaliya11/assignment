/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env:{
    GOOGLE_CLIENT_ID:'907500517100-2nfpv7qsn1an6fcarodrr52ahtab12ac.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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'
  }
}

module.exports = nextConfig
