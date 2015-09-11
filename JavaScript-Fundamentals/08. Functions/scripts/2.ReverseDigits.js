function reverseDigits(num) {
	'use strict';
	var numToReverseString =  num.toString().split('').reverse().join('');
	console.log(parseInt(numToReverseString));
}
reverseDigits(67385);