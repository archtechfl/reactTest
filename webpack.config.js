var webpack = require('webpack');

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: "/dist/"
  },
  devtool: 'source-map',
  devServer: { inline: true },
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