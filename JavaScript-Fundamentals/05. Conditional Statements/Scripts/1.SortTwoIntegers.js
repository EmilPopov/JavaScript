function sortTwoIntegers(a, b) {
	 'use strict';
	var c = null;
	if (a < b) {
    c = a;
    a = b;
    b = c;
    console.log(a,b);
	}
}
sortTwoIntegers(7, 12);