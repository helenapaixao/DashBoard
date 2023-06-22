/** @type {import('next').NextConfig} */
const nextConfig = {
  build: {
    extend(config, {}) {
        config.node = {
            fs: 'empty'
        }
    }
  },

}

module.exports = nextConfig
