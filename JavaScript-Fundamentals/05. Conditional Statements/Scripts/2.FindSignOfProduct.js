function findSignOfProduct(a, b, c) {
	var numbers = [a, b, c];
	var counter = 0;
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] < 0) {
			counter++;
		}
	}
	if (counter % 2 === 0) {
		console.log("sign is '+'");
	}
	else{
		console.log("sign is '-'");
	}
}
findSignOfProduct(6,19,-2);