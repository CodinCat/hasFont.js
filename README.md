hasFont.js
==========

a simple tool to check that the user has the font or not,
and return a Boolean.

It's vanilla JavaScript, no dependency required.

Usage
==========

```
npm install --save has-font
```

or

```html
<script type="text/javascript" src="hasfont.min.js"></script>
```

```javascript
import hasFont from 'has-font'

// hasFont(fontNameString)

if (hasFont('monaco')) {
  element.style.fontSize = '10px'
} else {
  element.style.fontSize = '12px'
}
```
