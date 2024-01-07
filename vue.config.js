const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://athayarayamadani.co.id',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/kreditpensiun-api/api',
        },
      },
    },
  },
};

