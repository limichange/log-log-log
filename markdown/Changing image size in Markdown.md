You could just use some HTML in your Markdown:

```html
<img src="drawing.jpg" alt="drawing" width="200" />
```

Or via style attribute (not supported by GitHub)

```html
<img src="drawing.jpg" alt="drawing" style="width:200px;" />
```

Or you could use a custom CSS file as described in this answer on Markdown and image alignment

```md
![drawing](drawing.jpg)
```

CSS in another file:

```md
img[alt=drawing] { width: 200px; }
```
