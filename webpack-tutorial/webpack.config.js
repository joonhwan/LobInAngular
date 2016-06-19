module.exports = {
  entry: {
    app: ['./app.js', './utils.js']
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
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