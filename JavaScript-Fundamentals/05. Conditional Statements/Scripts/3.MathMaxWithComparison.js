function mathMaxWithComparison(a, b, c) {
	var biggestNum = a;
	if (b > a && b > c) {
		biggestNum = b;
	} else if (c > a && c > b) {
		biggestNum = c;
	}
	console.log("Biggest number is %d",biggestNum);
}
mathMaxWithComparison(52,76,3)