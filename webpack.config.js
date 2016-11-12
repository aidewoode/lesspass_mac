module.exports = {
  entry: './app/app.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}
