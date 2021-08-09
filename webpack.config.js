const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true, // Enable webpack's Hot Module Replacement feature (https://webpack.js.org/configuration/dev-server/#devserverhot)
    compress: true, // Enable gzip compression for everything served (https://webpack.js.org/configuration/dev-server/#devservercompress)
    open: true, // Tells dev-server to open the default browser after server had been started.(https://webpack.js.org/configuration/dev-server/#devserveropen)
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.(scss|sass)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
              modules: {
                auto: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Peggy - bootstrap your frontend project',
      template: 'public/index.html',
      hash: false,
    }),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx', '.css', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // this is similar to tsconfig: "baseUrl": "src"(https://www.typescriptlang.org/v2/en/tsconfig#baseUrl)
    // so I don't need to write something like: import greeter from './greater', in stead, I can write: import greeter from 'greeter';
    // I don't need to write "../" or "./" when I import modules inside my project 'src' folder
    // for more details, refer https://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack/36574982#36574982
    // and https://webpack.js.org/configuration/resolve/#resolvemodules
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      /**
       * extract third-party libraries, such as lodash or react, to a separate vendor chunk
       * as they are less likely to change than our local source code.
       * This step will allow clients to request even less from the server to stay up to date
       * further reading:
       * https://webpack.js.org/guides/caching/
       * https://medium.com/@hpux/webpack-4-in-production-how-make-your-life-easier-4d03e2e5b081
       *
       * below settings comes from https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-2
       * warning: This might result in a large chunk containing all external packages.
       * It is recommended to only include your core frameworks and utilities and dynamically load the rest of the dependencies.
       */
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
