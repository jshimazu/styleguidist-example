module.exports = {
  webpackConfig: {
    module: {
      loaders: [
        {
          exclude: [
            /\.html$/,
            // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
            // because you might change the hot reloading server from the custom one
            // to Webpack's built-in webpack-dev-server/client?/, which would not
            // get properly excluded by /\.(js|jsx)$/ because of the query string.
            // Webpack 2 fixes this, but for now we include this hack.
            // https://github.com/facebookincubator/create-react-app/issues/1713
            /\.(js|jsx)(\?.*)?$/,
            /\.css$/,
            /\.scss$/,
            /\.json$/,
            /\.svg$/
          ],
          loader: 'url',
          query: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.svg$/,
          loader: 'file',
          query: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    }
  }
};
