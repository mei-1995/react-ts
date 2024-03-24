const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (pathname) => path.resolve(__dirname, pathname)
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  plugins: [
    /* less */
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    /* 别名 */
    alias: {
      '@': resolve('src')
    },
    configure: (webpackConfig) => {
      // 添加 ForkTsCheckerWebpackPlugin 插件
      webpackConfig.plugins.push(new ForkTsCheckerWebpackPlugin())

      return webpackConfig
    }
  },
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
}
