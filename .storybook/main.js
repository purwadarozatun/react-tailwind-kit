const path = require('path')
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions:  {
              ident: 'postcss',
              plugins: {

                tailwindcss: {},
                autoprefixer: {},
              }
            }
            
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
};
