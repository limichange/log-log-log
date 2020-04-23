# Performance impact of SVG/SMIL reflow/repaint?

SVG doesn't really have reflows as it's basically all absolutely positioned so changing the position of one element only has an effect on that element and any descendants.

`SVG DOM changes just cause repaints.`

If SVG content has a translate attribute it is stored in a separate layer.

## links

- [Performance impact of SVG/SMIL reflow/repaint?](https://stackoverflow.com/questions/24622003/performance-impact-of-svg-smil-reflow-repaint)
