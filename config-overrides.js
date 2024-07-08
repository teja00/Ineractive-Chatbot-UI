const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  (config) => {
    console.log(config.module.rules); // Log the rules to ensure our rule is added
    return config;
  },
  addWebpackModuleRule({
    test: /\_mjs.js.map$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: /node_modules\/@mediapipe\/tasks-vision/,
  })
);
