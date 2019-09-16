const path = require('path');
const { version } = require('../package.json');

module.exports = {
  title: 'Styleguidist tutorial',
  components: '../src/components/[A-Z]**/*.js', // index.js
  ignore: ['**/test.js'],
  require: ['./src/styles/index.scss'],
  version,
  webpackConfig: {
    module: {
      rules: [
        //babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
