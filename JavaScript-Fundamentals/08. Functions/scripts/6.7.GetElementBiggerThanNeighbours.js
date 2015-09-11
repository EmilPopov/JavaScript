function getElementBiggerThanNeighbours(array) {
	for (var i = 1; i < array.length - 1; i++) {
		if ((array[i]) > array[i - 1] && array[i] > array[i + 1]) {
			console.log("true : %d index : %d", array[i], i);
		}
	}
}
var array = [1, 2, 3, 4, 5, 4, 3, 17, 1];
getElementBiggerThanNeighbours(array);