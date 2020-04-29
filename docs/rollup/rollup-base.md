# rollup base

```ts
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/main.js',
  output: {
    file: './build/bundle.min.js',
    format: 'iife',
    name: 'bundle',
    globals: {
      'lodash': '_',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    uglify(),
  ],
}
```

## links

- [How To Setup Rollup Config](https://dev.to/proticm/how-to-setup-rollup-config-45mk)
