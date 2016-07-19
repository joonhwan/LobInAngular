var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: './src/app/main.ts',
    polyfills: './src/app/polyfills',
    vendor: './src/app/vendor.ts'
  },
  output: {
    path: './public',
    filename: './[name].js',
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
    function () {
      this.plugin('watch-run', function(watching, callback) {
        console.log('====== Compile Begin : ' + new Date());
        callback();
        console.log('>>> checked ' + watching);
      })
    },
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery'
    })
  ]
}
module.exports = config;