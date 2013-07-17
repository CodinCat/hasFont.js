/*
  hasFont.js: https://github.com/MrOPR/hasFont.js
  version: 1.0
*/
var hasFont = (function (d) {
  var checker1 = d.createElement('span'),
      checker2 = d.createElement('span');
  checker1.s = checker1.style;
  checker2.s = checker2.style;

  function setupChecker(fontName) {
    var prop,
        testText = 'HeRe-is*SoMe%tEst +99.? !@ #~ &^teXtWw L$VEY$U0',
        defaultStyle = {
          fontSize: '64px',
          margin: '0',
          padding: '0',
          position: 'absolute',
          top: '-161616px',
          left: '-161616px'
        };
    for (prop in defaultStyle) {
      checker1.s[prop] = defaultStyle[prop];
      checker2.s[prop] = defaultStyle[prop];
    }
    checker1.s.fontFamily = fontName + ', monospace';
    checker2.s.fontFamily = 'monospace';

    checker1.innerHTML = testText;
    checker2.innerHTML = testText;

    d.body.appendChild(checker1);
    d.body.appendChild(checker2);
  }

  function removeSymbols(str) {
    return str.replace(/[\,\.\/\<\>\!\?\;\'\"\[\]\\\{\}\|\=\*\(\)\$\%\^\&]/g, '');
  }

  return function (fontName) {
    function check() {
      if ((checker1.offsetWidth === checker2.offsetWidth) && 
          (checker1.offsetHeight === checker2.offsetHeight)) {
        // It should not be equal
        return false;
      }
      else {
        return true;
      }
    }

    if (fontName === '' || typeof fontName === 'undefined') return false;

    fontName = removeSymbols(fontName);
    setupChecker(fontName);
    
    if (check()) {
      return true;
    }
    else {
      // Relly? Lets check it again with different font.
      checker1.s.fontFamily = fontName + ', sans-serif';
      checker2.s.fontFamily = 'sans-serif';
      
      if (check()) {
        return true;
      }
    }

    return false;
  };
}(document));
