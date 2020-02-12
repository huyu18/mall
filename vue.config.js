module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: { //别名
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
}