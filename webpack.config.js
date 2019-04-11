const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080
  },
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env']
      }
    }]
  }
};