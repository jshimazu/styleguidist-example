module.exports = {
  title: 'Example Component Style Guide',
  webpackConfig: {
    module: {
      loaders: [
        {
          exclude: [
            /\.html$/,
            /\.(js|jsx)(\?.*)?$/,
            /\.css$/,
            /\.scss$/,
            /\.json$/,
          ],
          loader: 'url',
          query: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(css|scss)$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    }
  }
};
