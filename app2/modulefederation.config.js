const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    // "./Display": "./src/App",
    "./Display": "./src/bootstrap",
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