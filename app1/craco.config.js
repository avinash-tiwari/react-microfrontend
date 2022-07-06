// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const cracoModuleFederation = require('craco-module-federation');


module.exports = {
    // plugins: [
    //     new ModuleFederationPlugin({
    //         name: 'container',
    //         remotes: {
    //             products: 'products@http://localhost:8081/remoteEntry.js',
    //             cart: 'cart@http://localhost:8082/remoteEntry.js'
    //         }
    //     })
    // ]
    devServer: {
      port: 3001, // port of the application
    },
    plugins: [{
        plugin: cracoModuleFederation,
      },
    ]
};