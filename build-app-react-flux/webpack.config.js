var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    'app':'./src/main.tsx',
  },
  output: {
    path: './public',
    filename:'[name].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: 'ts-loader'},
      { test: /\.css$/, loader:'style!css' },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, 
        loader: 'file?name=assets/[name].[hash].[ext]' },
      { test: /\.html$/, loader:'html' }
    ]
  },
  plugins: [
    function() {
      this.plugin('watch-run', function (watching, callback) {
        console.log('====== Compile Begin : ' + new Date());
        callback();
      });
    },
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    })
  ]
}