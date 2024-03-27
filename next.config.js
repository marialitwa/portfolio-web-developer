/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.squarespace-cdn.com"
            }
        ]
    },
    // experimental: {
    //     serverActions: true
    // }
}

module.exports = nextConfig
