function isPrime(number) {
	var start = 2;
	while (start <= Math.sqrt(number)) {
		if (number % start++ < 1) return false;
	}
	return number > 1;
}
isPrime(9);
