function mathMaxMin(numbers) {
	function sortNumber(a, b) {
		return a - b;
	}
	numbers.sort(sortNumber);	
	console.log("Max : %d Min : %d ",numbers[0],numbers[numbers.length-1]);
}
var arr = [2, 36, 6, 34, 77, 5, 4];
mathMaxMin(arr);