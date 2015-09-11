(function isThirtBitOne() {
    'use strict';
    var n = 7;
    var isThirdBitOne = !(n >> 3 & 1);
    console.log('The third bit of %d is one: %s', n, isThirdBitOne);
})();
