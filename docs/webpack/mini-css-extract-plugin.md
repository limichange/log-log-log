# mini-css-extract-plugin

This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

It builds on top of a new webpack v4 feature (module types) and requires webpack 4 to work.

Lightweight CSS extraction plugin

Async loading
No duplicate compilation (performance)
Easier to use
Specific to CSS

```ts
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
}
```

## links

- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
