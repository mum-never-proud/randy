!(function(factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd) {
    define('randy', factory);
  }
  else {
    window.randy = factory();
  }
})(function() {
  var MAX_RAND_LEN = 5,
    DEFAULT_BASE = 36;

  function generateID(base, len) {
    return Math.random(Date.now()).toString(base).substr(2, len || MAX_RAND_LEN);
  }

  var randy = function(len, base) {
    len = len || MAX_RAND_LEN;
    base = base || DEFAULT_BASE;

    var generateIDCount = Math.floor(len / MAX_RAND_LEN),
      id = generateID(base),
      pad = len % MAX_RAND_LEN,
      i = 1;

    if (len < MAX_RAND_LEN) {
      id = generateID(base, len);
    } else {
      for (; i < generateIDCount; i++) {
        id +=  generateID(base);
      }

      if (pad) {
        id += generateID(base, pad);
      }
    }

    return id;
  };

  return randy;
});
