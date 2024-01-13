const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://athayarayamadani.co.id/kreditpensiun-api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/kreditpensiun-api/api',
        },
      },
    },
  },
};


