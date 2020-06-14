const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    hot: true, // Enable webpack's Hot Module Replacement feature (https://webpack.js.org/configuration/dev-server/#devserverhot)
    compress: true, // Enable gzip compression for everything served (https://webpack.js.org/configuration/dev-server/#devservercompress)
    open: true, // Tells dev-server to open the default browser after server had been started.(https://webpack.js.org/configuration/dev-server/#devserveropen)
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Peggy - bootstrap your frontend project', // TODO: create own template later
      hash: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // this is similar to tsconfig: "baseUrl": "src"(https://www.typescriptlang.org/v2/en/tsconfig#baseUrl)
    // so I don't need to write something like: import greeter from './greater', in stead, I can write: import greeter from 'greeter';
    // I don't need to write "../" or "./" when I import modules inside my project 'src' folder
    // for more details, refer https://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack/36574982#36574982
    // and https://webpack.js.org/configuration/resolve/#resolvemodules
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
