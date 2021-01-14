const { override, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path')

//  module.exports = override(
//    addWebpackAlias({
//      assets: path.resolve(__dirname, './src/assets'),
//      components: path.resolve(__dirname, './src/components'),
//      pages: path.resolve(__dirname, './src/pages'),
//    }),
//    addLessLoader({
//      javascript: true,
//    })
// );

module.exports = {
  webpack: override(
    addLessLoader(),
  )
}