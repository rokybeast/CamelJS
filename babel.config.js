module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12',
          browsers: [
            'last 2 versions',
            'not dead',
            '> 0.5%',
            'not ie 11'
          ]
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
  ],
  env: {
    production: {
      minified: true,
      comments: false,
    },
    test: {
      plugins: ['babel-plugin-source-map-support'],
      sourceMaps: 'inline',
      retainLines: true,
    }
  }
};