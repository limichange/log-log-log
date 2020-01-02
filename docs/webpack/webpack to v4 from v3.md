# webpack to v4 from v3

## mode

Add the new mode option to your config. Set it to production or development in your configuration depending on config type.

```js
module.exports = {
  // ...
  mode: 'production'
}
```

The purpose of development mode and production mode is different. You can use webpack-merge as shown in production guide to optimize configurations.

## Deprecated/Removed plugins

These plugins can be removed from configuration as they are default in production mode:

```js
module.exports = {
  // ...
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new ModuleConcatenationPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin()
  ]
}
```

These plugins are default in development mode

```js
module.exports = {
  // ...
  plugins: [new NamedModulesPlugin()]
}
```

These plugins were deprecated and are now removed:

```js
module.exports = {
  // ...
  plugins: [new NoErrorsPlugin(), new NewWatchingPlugin()]
}
```

## CommonsChunkPlugin

The CommonsChunkPlugin was removed. Instead the optimization.splitChunks options can be used.
