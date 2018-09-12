const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const options = {
  devtool: 'source-map',
  entry: {
    main: [
      './app/main.entry.js',
    ],
    style: [
      './styles/style.scss',
    ],
  },
  output: {
    path: process.cwd(),
    filename: '../[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader"
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../[name].css',
    }),
  ],
  // stats: {
  //   children: false
  // },
};

module.exports = options;
