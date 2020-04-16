# ts enum

```js
enum Color { Red = 1, Green, Blue }

let c: Color = Color.Green;
```

```js
'use strict'
var Color
;(function (Color) {
  Color[(Color['Red'] = 1)] = 'Red'
  Color[(Color['Green'] = 2)] = 'Green'
  Color[(Color['Blue'] = 3)] = 'Blue'
})(Color || (Color = {}))
var c = Color.Green
```

# links

- https://www.typescriptlang.org/play/?target=1#code/KYOwrgtgBAwg9gGzgJygbygJWAEygXigEYAaKAcWWFDICEExgoBfAWACgOFgAXKAYwBcsRCgIikyAHSVqIANxA
