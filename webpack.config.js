var webpack = require('webpack');

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
}