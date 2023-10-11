/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos'],
      },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
