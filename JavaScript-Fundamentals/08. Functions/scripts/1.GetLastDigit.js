function lastDigitAsString(number) {
	'use strict';
	var lastDigit = number % 10,
		digitsAsString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
		result = digitsAsString[lastDigit];
	return result;
}
console.log(lastDigitAsString(4767));