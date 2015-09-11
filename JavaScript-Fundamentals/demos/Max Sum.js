function solve(input) {
	var numbers = input.slice(1).map(Number),
		len,
		i,
		j,
		currentSum = 0,
		sum = numbers[0];
	for (i = 0; len = numbers.length , i < len; i++) {
		for (j = i; j < len; j++) {
			currentSum += numbers[j];
			if (currentSum > sum) {
               sum = currentSum;
			}
		}
		currentSum = 0;
	}
	return sum;
}
var input = ['9','-9','-8','-8','-7','-6','-5','-1','-7','-6'];
console.log(solve(input));
