const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require('./package.json');
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins.push(new ModuleFederationPlugin({
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
  }))
  config.experiments = { outputModule: true };
  return config;
}