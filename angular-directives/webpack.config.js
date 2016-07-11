var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = __dirname;
var srcDir = rootDir + '/src';
var distDir = rootDir + '/public';

module.exports = {
  context: rootDir, // a base directory to resolve the 'entry'
  entry: {
    'app' : srcDir + '/app.ts',
    'module2/adding_a_controller': srcDir + '/module2/adding_a_controller.ts',
    'module2/directive_scope': srcDir + '/module2/directive_scope.ts'
  },
  output: {
    path: distDir,
    filename: '[name].js', // [name] means we are goting to use 'key' value of each entry as the bundle file name
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [ {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }, {
        test: /\.html$/, 
        loader: 'raw'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      chunks: ['adding_a_controller', 'directive_scope']
    }),
    new HtmlWebpackPlugin({
      title: 'Listing All Apps',
      template: './src/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/module2/adding_a_controller.html',
      filename: '/module2/adding_a_controller.html',
      chunks: ['commons', 'module2/adding_a_controller']
    }),
    new HtmlWebpackPlugin({
      template: './src/module2/directive_scope.html',
      filename: '/module2/directive_scope.html',
      chunks: ['commons', 'module2/directive_scope']
    }),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery'
    })
  ]
}