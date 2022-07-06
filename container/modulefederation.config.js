// const deps = require("./package.json").dependencies;

module.exports = {
  name: "container",
//   exposes: {
//     "./Button": "./src/Button",
//   },
  remotes: {
    products: 'products@http://localhost:8081/remoteEntry.js',
  },
//   filename: "remoteEntry.js",
//   shared: {
//     ...deps,
//     react: {
//       singleton: true,
//       requiredVersion: deps["react"],
//     },
//     "react-dom": {
//       singleton: true,
//       requiredVersion: deps["react-dom"],
//     },
//   },
};