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
hasFont(fontName);

if (hasFont('monaco')) {
    element.style.fontSize = '10px';
}
else {
    element.style.fontSize = '12px';
}
```
