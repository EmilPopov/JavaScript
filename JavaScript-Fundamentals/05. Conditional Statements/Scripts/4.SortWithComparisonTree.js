function sortWithComparisonTree(a, b, c) {
	var arr = [a, b, c];

	function swap(i, j) {
		var t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
	if (arr[1] < arr[2]) {
		swap(1, 2);
	}
	if (arr[0] < arr[1]) {
		if (arr[1] < arr[2]) {
			swap(0, 2);
		} else {
			swap(0, 1);
		}
	}
	if (arr[1] < arr[2]) {
		swap(1, 2);
	}
	console.log(arr);

}
sortWithComparisonTree(14, 2, 33);