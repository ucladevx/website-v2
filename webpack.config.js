const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => ({
  entry: './src/main.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          env.production ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(jpg|png|svg|pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: env.production ? '[name].[contenthash].css' : '[name].css',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/logo.png',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'assets/images'),
      assets: path.resolve(__dirname, 'assets'),
      lib: path.resolve(__dirname, 'src/lib')
    }
  },
  devServer: {
    historyApiFallback: true
  }
})
