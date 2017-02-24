module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: '../app/assets/javascripts/webpack',
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
