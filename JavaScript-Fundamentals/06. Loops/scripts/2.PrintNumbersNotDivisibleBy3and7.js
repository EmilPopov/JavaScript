function printNumbersNotDivisibleBy3and7(n) {
	for (var i = 1; i < n; i++) {
		if (i % 21 !== 0 ) {
			console.log(i);
		}
	}
}
printNumbersNotDivisibleBy3and7(100);