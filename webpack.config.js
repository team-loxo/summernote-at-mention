const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
  return {
    entry: path.resolve(__dirname, 'src', 'summernote-at-mention.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, 'src')],
          exclude: [path.resolve(__dirname, 'node_modules')],
          loaders: ['babel-loader'],
        },
      ]
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js'],
    },
    externals: {
      jquery: '$',
    },
  };
};