runJsonServer();
runWebpackDevServer();

// 참조: https://github.com/typicode/json-server 
function runJsonServer(port) {
  var port = port || 3000;
  var jsonServer = require('json-server');
  var server = jsonServer.create();
  var router = jsonServer.router('db.json');
  var middlewares = jsonServer.defaults({
    readOnly: false, 
    noGzip: false,
    noCors: false 
  });
  server.use(middlewares);
  // server.use('/api', router)
  // server.use(router);
  // server.use(jsonServer.rewriter({
  //   '/api/': '/',
  //   '/blog/:resource/:id/show': '/:resource/:id'
  // }))
  server.use(jsonServer.rewriter({
    '/api/':'/'
  }), router);
  server.listen(3000, function () {
    console.log('json-server is running @ localhost:' + port);
  });
}

// webpack-dev-server를 api로 node환경에서 수행하는것은 
// http://bit.ly/2a1Vbmm 참조.

// 참고코드: http://bit.ly/29Nh0rf
function runWebpackDevServer(port) {
  'use strict';
  port = port || 8080;

  var webpack          = require('webpack'),
      WebpackDevServer = require('webpack-dev-server'),
      config           = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
      publicPath:         config.output.publicPath,
      hot:                true, // added line
      inline:             true, // added line!
      historyApiFallback: true,
      stats:              { colors: true }
  }).listen(port, 'localhost', function (err, result) {
      if (err) {
          console.log(err);
      }
      console.log('webpack-dev-server is runnin @ localhost:' + port);
  });
}

