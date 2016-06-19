module.exports = {
  entry:"./app/dist/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader:"style!css" }
    ]
  }
}