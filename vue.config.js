const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    disableHostCheck: true,
    host : '0.0.0.0',
    allowedHosts: 'all',
  },
  transpileDependencies: true
});
