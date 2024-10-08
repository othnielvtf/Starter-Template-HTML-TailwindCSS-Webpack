const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './src',
    hot: true,
    open: true,
    host: 'localhost', 
    port: 3000,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};