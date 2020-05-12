# rollup-strip

A rollup plugin remove `debugger` statements and afunctions like `assert.equal` and `console.log` from your code.

## Requirements

This plugin requires an LTS Node version(8+) and rollup 1.20+

## Install

```bash
npm install @rollup/plugin-strip --save-dev
```

## Usage

```ts
import strip from '@rollup/plugin-strip'

export default {
  input: 'src/index.js',
  output: {
    dir: 'output'
    format: 'cjs'
  },
  plugins: {
    strip({
      labels: ['unittest']
    })
  }
}
```

## Options

| option    | type     | default                   | description                                                                                                          |
| --------- | -------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| debugger  | Boolean  | true                      | If `true` instructs the plugin to remove debugger statements.                                                        |
| functions | String[] | ['console.*', 'assert.*'] | Specifies the functions that the plugin will target and remove.                                                      |
| labels    | String[] | []                        | Specifies the labeled blocks that the plugin will target and remove.                                                 |
| sourceMap | Boolean  | true                      | If `true`, instructs the plugin to update source maps accordingly after removing configured targets from the bundle. |

## links

- [@rollup/plugin-strip](https://github.com/rollup/plugins/blob/master/packages/strip/README.md)
