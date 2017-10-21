const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: '#inline-source-map',
  entry: path.join(__dirname, 'example', 'index.js'),
  output: {
    publicPath: '/example/static/',
    path: path.join(__dirname, 'example', 'static'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react-wizard-step': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url-loader?limit=70000&name=images/[name].[ext]'],
      },
    ],
  },
  devServer: {
    inline: true,
  },
}
