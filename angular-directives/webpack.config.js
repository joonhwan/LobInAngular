var webpack = require('webpack');
var fsLib = require('fs');
var pathLib = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = __dirname;
var srcDir = rootDir + '/src';
var distDir = rootDir + '/public';


var config = {
  context: rootDir, // a base directory to resolve the 'entry'
  entry: {
    'app' : srcDir + '/app.ts',
    'module2/adding_a_controller/main': srcDir + '/module2/adding_a_controller/main.ts',
    'module2/directive_scope/main': srcDir + '/module2/directive_scope/main.ts'
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
    function () {
      this.plugin('watch-run', function(watching, callback) {
        console.log('====== Compile Begin : ' + new Date());

        console.log('>>> checked ');

        callback();
      })
    },
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
      template: './src/module2/adding_a_controller/index.html',
      filename: '/module2/adding_a_controller/index.html',
      chunks: ['commons', 'module2/adding_a_controller/main']
    }),
    new HtmlWebpackPlugin({
      template: './src/module2/directive_scope/index.html',
      filename: '/module2/directive_scope/index.html',
      chunks: ['commons', 'module2/directive_scope/main']
    }),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery'
    })
  ]
};

var path = pathLib.join(rootDir, 'src');
function forEachDir(path, callback) {
  fsLib.readdir(path, function (err, files) {
    if(err) throw err;
    files.forEach(function(file) {
      var fullPath = pathLib.join(path, file);
      fsLib.stat(fullPath, function(err, stats) {
        if(stats.isDirectory()) {
          callback(fullPath);
        }
      });
    });
  });
};
function isFileExist(path) {
  var foundCount = 0;
  fs.access(htmlFilePath, fs.constants.F_OK, (err) => {
    if(!err) {
      ++foundCount; 
    }
  });
  return foundCount > 0;
}

forEachDir(path, function(fullPath) {
  //console.log('> ' + fullPath)
  forEachDir(fullPath, function (subDirFullPath) {
    var htmlFilePath = pathLib.join(subDirFullPath, 'index.html');
    var tsFilePath = pathLib.join(subDirFullPath, 'main.ts');
    
  });
});


module.exports = config;
