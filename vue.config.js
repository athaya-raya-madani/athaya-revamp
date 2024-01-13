const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://athayarayamadani.co.id/kreditpensiun-api/',
        ws : true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/kreditpensiun-api/api',
        },
      },
    },
  },
};


