const path = require('path');

module.exports = {
  // inform webpack that I am building a bundle for nodejs rather than for the
  // browser
  target: 'node',

  // tell webpack the root file of my server application
  entry: './js/main.js',

  // tells webpack where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js')
  },

  // tells webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ['@babel/preset-env']
        }
      }
    ]
  }
};