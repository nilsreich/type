const path = require('path');

module.exports = {
  entry: './src/components/my-app.js',
  output: {
    filename: 'my-app.js',
    path: path.resolve(__dirname, 'dist')
  }
};