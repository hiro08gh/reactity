const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: __dirname + '/public/',
    host: 'localhost',
    port: 3000,
    hot: true,
    quiet: true,
    historyApiFallback: true
  }
});
