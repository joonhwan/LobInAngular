var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', 
        query: { presets: ['react', 'es2015'] } } 
    ],
  },
  // resolve: {
  //   extensions: ['', '.webpack.js', '.web.js', '.js', '.js', '.ts', '.tsx']
  // },
  plugins: [
    function() {
      this.plugin('watch-run', function(watching, callback) {
        console.log('=== Compile @ ' + new Date());
        callback();
      })
    },
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
    // ,
    // new webpack.ProvidePlugin({
    //   'jQuery': 'jquery',
    //   '$': 'jquery'
    // })
  ]
}