const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: './src/components/my-app.js',
  output: {
    filename: 'my-app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Other plugins...

    new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
    include: [/\.html$/, /\.js$/]
    })
  ]
};