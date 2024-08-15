const { dependencies } = require('./package.json');

module.exports = {
  name: 'cboe_risk',
  filename: 'remoteEntry.js',
  library: {type: "module"},
  exposes: {
    './SharedTable': './src/SharedTable.jsx',
  },
  remotes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};