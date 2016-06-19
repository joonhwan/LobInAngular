var path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: {
    app: ['./app.js', './utils.js']
  },
  output: {
    path: path.resolve('build/js'),
    publicPath: '/public/assets/js',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_moddules/, 
        loader: 'babel-loader' 
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
}