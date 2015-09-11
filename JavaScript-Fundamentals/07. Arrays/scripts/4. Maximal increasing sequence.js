var len,
	arr = [3, 2, 3, 4, 2, 2, 4,5,6,7,8],
    currentCounter = 1,
	counter = 1,
	maxSequence = [],
	sequence = [];
for (var i = 0; len = arr.length, i < len; i++) {
	if (arr[i] + 1 === arr[i + 1]) {
		currentCounter += 1;
		sequence.push(arr[i]);
	} else {
		sequence.push(arr[i]);
		if (currentCounter > counter) {
			counter = currentCounter;
			maxSequence = sequence.slice(0);
		}
		currentCounter = 1;
		sequence = [];
	}
}
console.log(maxSequence.join(','));
