const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader:'css-loader'
            },{
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules', 'node_modules/bootstrap-sass/assets']
              }
            }
          ]
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|jpg|png)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    })
  ],
  devServer: {
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:4000',
    //     secure: false
    //   },
    // }
  }
};
