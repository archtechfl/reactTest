var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/index.jsx',
    './app/styles/app.less',
  ],
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: "/dist/"
  },
  devtool: 'source-map',
  devServer: { inline: false },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.less$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin("styles/style.css")
  ]
}