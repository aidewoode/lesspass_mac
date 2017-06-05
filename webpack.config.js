const webpack = require('webpack');

module.exports = function(env) {
  let uglifyPlugin = []

  if (env == 'production') {
    uglifyPlugin.push(new webpack.optimize.UglifyJsPlugin())
  }

  return {
    entry: __dirname + '/app/app.js',
    output: {
      path: __dirname + '/app',
      filename: 'bundle.js',
      publicPath: 'http://localhost:8080/assets'
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                postcss: [require('postcss-modules-values')]
              }
            },
            {
              loader: 'eslint-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
      ]
    },
    plugins: [
      ...uglifyPlugin,
      //  define the vue enviroment.
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      })
    ]
  }
}
