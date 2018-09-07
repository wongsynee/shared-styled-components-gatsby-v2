const webpack = require('webpack')
const path = require('path')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

// Build path for React SPA
const outputDirectoryName = 'hesta-mol'
const buildDirectoryName = 'build'

const DEV_SERVER_HOST  = '0.0.0.0'
const DEV_SERVER_PORT  = 8080

module.exports = function(env) {
  const publicPath = (() => {
    // if (env) {
    //   switch (env.assetsMode) {
    //     case 'test':
    //       return ASSETS_PATH_TEST
    //     case 'ci':
    //       return ASSETS_PATH_CI
    //   }
    // }
    return '/'
  })()

  return {
    entry: {
      'hesta-mol': [
        '@babel/polyfill',
        './src/hesta-mol/index.js',
      ],
    },
    output: {
      path: path.join(process.cwd(), buildDirectoryName, outputDirectoryName),
      filename: 'assets/js/[name].js',
      chunkFilename: 'assets/js/[name].[chunkHash].js',
      publicPath,
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(process.cwd(), buildDirectoryName, outputDirectoryName),
      open: true,
      openPage: '',
      host: DEV_SERVER_HOST,
      port: DEV_SERVER_PORT,
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          include: /src/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                camelCase: 'dashes',
                localIdentName: '[local]__[hash:base64:5]',
                importLoaders: 2,
              },
            },
            'postcss-loader?sourceMap',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                modules: true,
                includePaths: [
                  'src',
                  'node_modules',
                ],
              },
            },
          ],
        },
        {
          use: ['modernizr-loader', 'json-loader'],
          test: /\.modernizr-config\.json$/,
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "assets/css/[name].css",
        chunkFilename: "assets/css/[id].css"
      }),
      new HtmlWebpackPlugin({
        // inject: false,
        template: './src/hesta-mol/index.html',
        title: 'HESTA Member Online',
        appId: 'hesta-mol',
      }),
    ],
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, '.modernizr-config.json'),
      },
      extensions: ['.js', '.jsx'],
      modules: [
        'src',
        'node_modules',
      ],
    },
  }
}
