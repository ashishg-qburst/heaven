module.exports = {
  entry: "./src/heaven.js",
  output: {
    path: __dirname,
    filename: "dist/heaven.js",
    library: "heaven"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
