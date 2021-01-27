const webpack = require('webpack')
const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'

const config = {
  lintOnSave: isDev,
  runtimeCompiler: true,
  devServer: {
    port: 7777,
    proxy: {
      '/api': {
        target: process.env.API_HOST
      },
      '/userapi': {
        target: process.env.API_HOST,
        pathRewrite: { '^/userapi': process.env.API_PATH }
      }
    },
    compress: true,
    watchOptions: {
      ignored: ['node_modules'],
      aggregateTimeout: 1000,
      poll: 1500
    }
  },

  css: { extract: true },

  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          API_URL: JSON.stringify(process.env.API_URL),
          API_HOST: JSON.stringify(process.env.API_HOST)
        }
      })
    ],
    output: {
      filename: isDev ? '[name].[hash:8].js' : '[name].[contenthash:8].js',
      chunkFilename: isDev ? '[name].js' : '[name].[contenthash:8].js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        options.publicPath = process.env.PUBLIC_PATH
        options.limit = 5000
        return options
      })

    config.module
      .rule('svg')
      .use('file-loader')
      .tap(options => {
        options.publicPath = process.env.PUBLIC_PATH
        return options
      })
  }
}

module.exports = config
