const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/components/my-app.js',
  output: {
    filename: 'my-app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Other plugins...

  ]
};