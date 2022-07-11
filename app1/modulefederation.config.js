const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    // "./Counter": "./src/App",
    // "./Counter": "./src/index",
    "./Counter": "./src/bootstrap",
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