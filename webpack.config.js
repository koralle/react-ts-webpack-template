const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, 'src/ts/index.tsx'),

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, './js/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|oft)$/,
        loader: 'file-loader',
        options: {
          limit: 8192,
          name: path.resolve(__dirname, "./images/[name].[ext]")
        }
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', 'jsx', '.ts', '.js', '.json'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html')
    })
  ]
}