(function thirdDigit() {
	"use strict"
	var input = 1732;
	var number = parseInt((input / 100) % 10);
	if (number === 7) {
		console.log(number);
	}
})();
