module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',  // 注意在style/img:src标签中使用需要'～assets/'
        'components': '@/components',
        'views': '@/views',
        'store': '@/store',
        'router': '@/router',
      }
    }
  },
}