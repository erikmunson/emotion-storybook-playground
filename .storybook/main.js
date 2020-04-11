module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
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
    return config;
  },
};
