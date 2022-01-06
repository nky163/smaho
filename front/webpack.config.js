const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|dist)/,
      //   use: {
      //     loader: '@babel/eslint-parser',
      //     options: {
      //       fix: true,
      //     }
      //   }
      // },
      {
        test: /.jsx?$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    port: 3000
  },
}