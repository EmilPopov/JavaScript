var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
	i,
	j,
	len,
	number,
	currentCounter = 1,
	counter = 1;
for (i = 0; len = arr.length, i < len; i += 1) {
	for (j = i + 1; j < len; j += 1) {
		if (arr[i] === arr[j]) {
			currentCounter += 1;
		}
	}
	if (currentCounter > counter) {
		counter = currentCounter;
		number = arr[i];
	}
	currentCounter = 1;
}
console.log(number + ' => ' + counter);