var path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: {
    app: ['./app', './utils']
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