/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env:{
    DB_URL: "mongodb+srv://subhojeet:subhojeet@cluster0.4caoo.mongodb.net/BookIT?retryWrites=true&w=majority" 
  }
}

module.exports = nextConfig
