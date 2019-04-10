module.exports = {
  configureWebpack: {
    watch: false
  },
  devServer: {
    proxy: 'http://localhost:3000'
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('html')
        .init((Plugin, args) => {
          const newArgs = {
            ...args[0]
          }
          newArgs.minify.removeAttributeQuotes = false
          return new Plugin(newArgs)
        })
    }
  }
}
