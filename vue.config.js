const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    proxy : 'https://athayarayamadani.co.id/kreditpensiun-api/',
    // proxy: {
    //   '^/api': {
    //     target: 'https://athayarayamadani.co.id/kreditpensiun-api/',
    //     ws : true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/kreditpensiun-api/api',
    //     },
    //   },
    // },
  },
};


