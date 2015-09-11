function mathMaxOfFiveIntegers(a, b, c, d, e) {
	var numbers = [a, b, c, d, e];

	function sortNumber(a, b) {
		return a - b;
	}
	numbers.sort(sortNumber);
	numbers.reverse();

	console.log(numbers[0]);
}
mathMaxOfFiveIntegers(2, 45, 21, 3, 22);