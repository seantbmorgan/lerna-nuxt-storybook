// import { configure } from '@storybook/vue';

// const req = require.context('../packages', true, /.stories.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
// configure(loadStories, module);

// module.exports = {
  
// };

const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ["../packages/**/*.stories.[tj]s"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};