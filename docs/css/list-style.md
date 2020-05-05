# list-style

The `list-style` CSS property is a shorthand to set style properties

- `list-style-type`
- `list-style-image`
- `list-style-position`

## list-style-type

The `list-style-type` CSS property sets the marker(such as disc, character, or custom counter style) of a list item element.

```css
/* Partial list of types */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* <string> value */
list-style-type: '-';

/* Identifier matching an @counter-style rule */
list-style-type: custom-counter-style;

/* Keyword value */
list-style-type: none;

/* Global values */
list-style-type: inherit;
list-style-type: initial;
list-style-type: unset;
```

## list-style-image

The `list-style-image` CSS property sets an image to be used as the list item maker.

It is often move convenient to use the shorthand `list-style`.

```css
/* <url> values */
list-style-image: url('starsolid.gif');
```

## list-style-position

The `list-style-position` CSS property sets the position of the `::maker` relative to a list item.

```css
/* Keyword values */
list-style-position: inside;
list-style-position: outside;

/* Global values */
list-style-position: inherit;
list-style-position: initial;
list-style-position: unset;
```

## links

- [list-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style)
