var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist"
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}