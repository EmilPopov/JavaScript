function isPointInCurcle() {
    'use strict';
    var r = 5
      , x = 1
      , y = 1
      , isIn = (x * x + y * y < r * r);
    console.log('Point %d:%d is inside circle with radius %d: %s', x, y, r, isIn);
}
isPointInCurcle();