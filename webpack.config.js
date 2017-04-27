'use strict'

const path = require("path")
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'napo.js',
    library: 'napo',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/, use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "css-loader/locals", options: { modules: true } },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
}
