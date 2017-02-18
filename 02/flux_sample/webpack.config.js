module.exports = {
  entry: {
    'build': ['./src/App.js']

  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modles/,
        loader: 'babel-loader',
        query:
        {
          presets:['react', 'es2015']
        }
      }
    ]
  }
};
