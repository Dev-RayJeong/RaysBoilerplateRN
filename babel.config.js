module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@apis': './src/apis',
          '@config': './config',
          '@screen': './src/components/screen',
          '@navigation': './src/components/navigation',
          '@models': './src/models',
          '@stores': './src/stores',
          '@utils': './src/utils',
          '@STRINGS': './STRINGS',
          '@assets': './assets',
          '@shared': './src/components/shared',
          '@dev': './src/dev',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'transform-remove-console'],
    },
  },
};
