var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: '#cheap-eval-source-map',

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  entry: [
    'webpack/hot/dev-server',
    './app.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    hot: true,
    inline: true,
    stats: { colors: true },
    historyApiFallback: true
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader?stage=0'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss')}
    ]
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-modules-values'),
    require('postcss-color-function'),
    require('postcss-calc'),
  ]
};
