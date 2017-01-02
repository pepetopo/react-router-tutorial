module.exports = {
  entry: './index.jsx',

  output: {
    filename: 'bundle.js',
    publicPath: '',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
