module.exports = {
  stories: ['../src/**/*.stories.tsx', '../src/**/*.stories.ts'],
  addons: ['@storybook/addon-storysource', '@storybook/addon-knobs/register', '@storybook/addon-backgrounds/register'],
  webpackFinal: async (config) => {
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
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    // Source addon
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
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
    const svgLoaderRules = config.module.rules.filter((rule) => rule.test.test && rule.test.test('.svg'));
    svgLoaderRules.forEach((rule) => {
      rule.exclude = /\.svg$/;
    });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(tsx?)$/,
      },
      use: [{ loader: '@svgr/webpack' }],
      exclude: /node_modules/,
    });

    return config;
  },
};
