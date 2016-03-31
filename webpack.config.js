var path = require('path');

module.exports = {
  entry : {
    'demo-app' : "./main.js",
    lib  : "./src/browser.js"
  },
  output: {
    path : path.join(__dirname, 'lib'),
    filename : "[name].js",
  },
  devtool : "source-map",
  module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}
