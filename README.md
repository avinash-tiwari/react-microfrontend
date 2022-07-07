# Microfrontend
* used because
    - easy to manage large scale applications deployment
    - development
    - is language agnostic

* can be implemented using various ways, we are chosing webpack frederation module called ModuleFederationPlugin

# what is webpack
* webpack is a module to bundle and convert all the JS code to the browser version of JS, we use different parameters to create config for a project.
* we can use various third party plugins to make our job easier. for example
    - ModuleFederationPlugin: plugin for implementing the microfrontends
    - HtmlWebpackPlugin: plugin to inject the JS bundle files created dusring build phase to the index.html dynamically

example config
```javascript
module.exports = {
    mode: 'development', // mode of the application
    devServer: {
        port: 8082, // port of the application
    },
    // all the plugins are listed here with their respective configs
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
```

# Understanding the ModuleFederationPlugin configurations
This plugin will create several files:-
* main.js standalone build file for running this app independently
* remoteEntry.js: a meta file, containing all the data about the files to load from the project and directions on how to load them
* bundled src files pr the files exposed from the app itself
* library files, bundled library files which are used in the app.

Why use import function and bootstrap style
- the browser will first fetch the main.js file
- if it sees the import function it will start fetching the modules used in the that file simultaneously
- the import function sytax loads a dependency on demand and when required only

There are two types of applications in an MFE,
1. Provider: the app which will be used by other apps, or in a container app
2. Consumer: the app which consumes all the provider apps.

Undeerstaning the provider config:

```javascript
new ModuleFederationPlugin({
    name: 'cart',
    filename: 'remoteEntry.js',
    exposes: {
        './CartShow': './src/bootstrap'
    },
    shared: ['faker']
}),
```
all the keys represents
- name: used by the consumer app to mention about remotes
- filename: name of the file containg all the metadata of all the MFE
- exposes: an object
    * key: an alias for the consumer to import some part of the provider app
    * value: the code which is being exported and made as an alias for consumer
- shared: these are the libraries that are common in all the provider apps. The container will download the library files only once.


Undeerstaning the consumer config:

```javascript
new ModuleFederationPlugin({
    name: 'container',
    remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js'
    }
})
```
all the keys represents
- name: just for reference, not used for anything
- remotes: all the remotes that this app has to fetch in order to run the app
    * key: represents the the alias which can be used to import in the consumer app
        For eaxmple:-
        ```
            import ABC from 'products';
        ```
    * value: a specific string with following parts
        <app-name>@<app-host>/<file-name>
        for example, for using the above products app
        'products@http://localhost:8081/remoteEntry.js'