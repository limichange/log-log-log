# NoEmitOnErrorsPlugin

Use the NoEmitOnErrorsPlugin to skip the emitting phase whenever there are errors while compiling. This ensures that no assets are emitted that include errors. The emitted flag in the stats is false for all assets.

webpack.NoErrorsPlugin() is an optional plugin that tells the reloader to not reload if there is an error. The error is simply printed in the console, and the page does not reload. If you do not have this plugin enabled and you have an error, a red screen of death is thrown.

## links

- https://webpack-v3.jsx.app/plugins/no-emit-on-errors-plugin/
- https://www.jmfurlott.com/setting-up-react-hot-loader/
- https://stackoverflow.com/questions/40080501/webpack-when-to-use-noerrorsplugin
