var numbers = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
	repeatNumber,
	currentCounter = 1,
	counter = 1,
	i,
	len;
for ( i = 0; len = numbers.length,i < len; i++) {
	for (var j = i +1; j < numbers.length; j++) {
		if (numbers[i] === numbers[j]) {
			currentCounter++;
			if (currentCounter > counter) {
				counter = currentCounter;
				currentCounter = 1;
				repeatNumber = numbers[i];
			}
		} else {
			break;
		}
	}
}
console.log(repeatNumber + ' ' + counter);