var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

var srcDir = path.join(__dirname, './src');
var outDir = path.join(__dirname, './public');

var config = {
  entry: {
    app: path.join(srcDir, './app/main.ts'),
    polyfills: path.join(srcDir, './app/polyfills.ts'),
    vendor: path.join(srcDir, './app/vendor.ts')
  },
  output: {
    path: outDir,
    filename: './[name].js',
    publicPath: '/'
  },
  devServer: {
    outputPath: outDir,
    inline: true
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts'
    }, {
        //   test: /\.css$/,
        //   loader: 'style!css'
        // }, {
        test: /\.css$/,
        loader: 'css-to-string!css?minimize'
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
        loader: 'html-loader'
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[name]-[hash:6].[ext]"
      }
    ]
  },
  'html-minify-loader': {
    empty: true,        // KEEP empty attributes
    cdata: true,        // KEEP CDATA from scripts
    comments: true,     // KEEP comments
    dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
      lowerCaseAttributeNames: false,      // do not call .toLowerCase for each attribute name (Angular2 use camelCase attributes)
    }
  },
  // angular 2 compatible html-loader configuration
  'htmlLoader': {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
    customAttrAssign: [ /\)?\]?=/ ] 
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
    function () {
      this.plugin('watch-run', function (watching, callback) {
        console.log('====== Compile Begin : ' + new Date());
        callback();
      })
    },
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, './index.html')
    }),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery'
    })
    // new WriteFilePlugin()
  ]
}
module.exports = config;