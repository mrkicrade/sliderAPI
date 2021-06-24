const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');
const webpack = require('webpack');


module.exports = {
 "mode": "none",
 "devtool": 'source-map',
 "entry": [
    __dirname + '/src/index.js',
    __dirname + '/src/scss/main.scss'
  ],
  "output": {
    "path": __dirname + '/dist',
    "filename": "slider.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  "module": {
    "rules": [
      {
        "test": /\.scss$/,
        "exclude": /node_modules/,
        "use": [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": [
          { loader: 'babel-loader', options: { sourceMap: true, "presets": [ "@babel/preset-env"] } },
        ]
      },
    ]
  },
  "optimization": {
    "minimize": true,
    "minimizer": [
      new CssMinimizerPlugin({
        "exclude": /node_modules/,
      }),
      new TerserPlugin({
        "exclude": /node_modules/,
      }),
    ],
  },
  "plugins": [
    new MiniCssExtractPlugin({
      "filename": 'style.min.css',
    }),
    new webpack.SourceMapDevToolPlugin({})
  ],
}