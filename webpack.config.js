const path = require('path');

module.exports = {
  mode: "development",

  entry: './src/index.tsx',

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', 'jsx', '.ts', '.js', '.json'],
  },

}