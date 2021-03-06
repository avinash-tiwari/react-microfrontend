const deps = require("./package.json").dependencies;

module.exports = {
  name: "container",
  remotes: {
    app1: 'app1@http://localhost:3001/remoteEntry.js',
    app2: 'app2@http://localhost:3002/remoteEntry.js',
    tapberry: 'tapberry@http://localhost:3003/remoteEntry.js',
    bossberry: 'bossberry@http://localhost:3004/remoteEntry.js',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: deps.react
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: deps['react-dom'],
    },
  },
};