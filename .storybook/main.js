const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs/register', '@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    // TypeScript
    config.module.rules.push({
      test: /\.(tsx?)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        {
          loader: require.resolve('@mdx-js/loader'),
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.mdx');

    // Source addon
    config.module.rules.push({
      test: /\.stories\.(tsx?|mdx)$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    // SVGR

    // First we need to disable Storybook's default loader for SVG files
    const svgLoaderRules = config.module.rules.filter(rule => rule.test.test && rule.test.test('.svg'));
    svgLoaderRules.forEach(rule => {
      rule.exclude = /\.svg$/;
    });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(tsx?|mdx)$/,
      },
      use: [{ loader: '@svgr/webpack' }],
      exclude: /node_modules/,
    });

    return config;
  },
};
