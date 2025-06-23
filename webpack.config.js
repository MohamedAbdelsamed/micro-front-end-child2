const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
devServer: {
  port: 3002,
  hot: false, // disable hot module replacement
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  historyApiFallback: true,
},

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfrontend2",
      filename: "remoteEntry.js",
      exposes: {
       './App': './src/App.js',
      },
      remotes: {
        host_app: 'host_app@http://localhost:3000/remoteEntry.js',
      },
shared: {
  react: {
    singleton: true,
    requiredVersion: '^19.1.0',
  },
  'react-dom': {
    singleton: true,
    requiredVersion: '^19.1.0',
  },
  'react-i18next': {
    singleton: true,
    requiredVersion: '^13.0.0',
  },
  i18next: {
    singleton: true,
    requiredVersion: '^23.0.0',
  },
}


    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
