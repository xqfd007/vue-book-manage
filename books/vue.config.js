const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
      },
    },
  },
//   devServer: {
//     port: 8000,
//     open: true,
//     oberlay: {
//       warning: false,
//       errors: true,
//     },
//     disableHostCheck: true,
//     proxy: {
//       '/login': {
//         target: 'http://localhost:8000',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/login': '',
//         },
//       },
//     },
//   },
}
