hasFont.js
==========

a simple tool to check that the user has the font or not,
and return a Boolean.

It's pure JavaScript, no jQuery required.

Usage
==========

```html
<script type="text/javascript" src="hasfont.min.js"></script>
```

```javascript
// only one global function: hasFont()
hasFont(fontName)

// Some example
if (hasFont('monaco')) {
  someElement.style.fontSize = '10px';
}
else {
  someElement.style.fontSize = '12px';
}
```

