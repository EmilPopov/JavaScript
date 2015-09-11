function solve(input) {
	var numbers = input.slice(1).map(Number),
		len,
		counter = 1;
	for (var i = 0; len = numbers.length - 1, i < len; i++) {
		if (numbers[i] <= numbers[i + 1]) {
			continue;
		} else {
			counter += 1;
		}
	}

	return counter;
}
var arr1 = ['7','1','2','-3','4','4','0','1'];
var arr2 = ['6','1','3','-5','8','7','-6'];
var arr3 = ['9','1','8','8','7','6','5','7','7','6'];
console.log(solve(arr3));