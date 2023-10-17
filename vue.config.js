const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-app.github.io/' : '/'
  // base: process.env.BASE_URL === 'production' ? '/vue-app.github.io/' : '/'
  baseUrl: process.env.VUE_APP_MODE === 'production' ? '/vue-app.github.io/' : '/',
})
