"use strict";

var webpack = require('webpack');
var fsLib = require('fs');
var isThere = require('is-there');
var pathLib = require('path');
var prettyjson = require('prettyjson');
var humanizeString = require('humanize-string');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = __dirname;
var srcDir = rootDir + '/src';
var distDir = rootDir + '/public';

function generateCategorizedAppData(topDir) {
  
  var appData = [];

  function forEachDirSync(dirPath, callback) {
    var entries = fsLib.readdirSync(dirPath);
    // console.log('1entries = %j', entries);
    entries.forEach(function(fileItem) {
      var fileItemPath = pathLib.join(dirPath, fileItem);
      if(fsLib.lstatSync(fileItemPath).isDirectory()) {
        callback(fileItemPath);
      }
    });
  }

  forEachDirSync(topDir, function(appCategoryPath) {
    //console.log('fileEachDirSync: ' + dirPath);
    var dirName = pathLib.basename(appCategoryPath);
    var subApps = [];
    forEachDirSync(appCategoryPath, function(subAppPath) {
      var htmlFilePath = pathLib.join(subAppPath, 'index.html');
      var tsFilePath = pathLib.join(subAppPath, 'main.ts');
      if(isThere(htmlFilePath) && isThere(tsFilePath)) {
        console.log('> ' + subAppPath);
        var tsFileRelDir = pathLib.dirname(pathLib.relative(topDir, tsFilePath));
        var tsFilename = pathLib.basename(tsFilePath, '.ts');
        // console.log('>> tsFileRelDir: ' + tsFileRelDir);
        // console.log('>> tsFilename: ' + tsFilename);
        var tsFileRelPathWithoutExt = pathLib.join(tsFileRelDir, tsFilename);
        var htmlFileRelPath = pathLib.relative(topDir, htmlFilePath);
        // console.log('>> filename: ' + htmlFileRelPath);
        // console.log('>> chunks: ' + tsFileRelPathWithoutExt);
        var subDirName = pathLib.basename(subAppPath);
        subApps.push({
          title: humanizeString(subDirName),
          tsOutput: tsFileRelPathWithoutExt,
          tsInput: tsFilePath,
          htmlOutput: htmlFileRelPath,
          htmlInput: htmlFilePath
        });
      }
    });
    appData.push( {
      categoryName: humanizeString(dirName),
      apps: subApps
    });
  });
  return appData;
}

var config = {
  context: rootDir, // a base directory to resolve the 'entry'
  entry: {
    'app' : srcDir + '/app.ts'
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
        callback();
        console.log('>>> checked ');
      })
    },
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      chunks: ['adding_a_controller', 'directive_scope']
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Listing All Apps',
    //   template: './src/index.ejs',
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/module2/adding_a_controller/index.html',
    //   filename: '/module2/adding_a_controller/index.html',
    //   chunks: ['commons', 'module2/adding_a_controller/main']
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/module2/directive_scope/index.html',
    //   filename: '/module2/directive_scope/index.html',
    //   chunks: ['commons', 'module2/directive_scope/main']
    // }),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery'
    })
  ]
};

var appData = generateCategorizedAppData(srcDir);
// console.log('---- appData ----');
// console.log(prettyjson.render(appData));
// console.log('-----------------');

config.plugins.push(new HtmlWebpackPlugin({
  template: './src/index.ejs',
  inject: 'body', 
  appData: appData
}));

appData.forEach(function(category) {
  category.apps.forEach(function(app) {
    // console.log('subApp = %j', subApp);
    config.entry[app.tsOutput] = app.tsInput;
    config.plugins.push(new HtmlWebpackPlugin({
        title: app.title,
        template: app.htmlInput, //'./src/module2/adding_a_controller/index.html',
        filename: app.htmlOutput, //'/module2/adding_a_controller/index.html',
        chunks: ['commons', app.tsOutput] //'module2/adding_a_controller/main']
      }));
  });
});

//console.log('webpack config = %s', prettyjson.render(config));

module.exports = config;

//console.log('finished..');