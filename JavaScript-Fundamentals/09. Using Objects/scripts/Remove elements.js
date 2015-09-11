var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'],
	newArr = [],
	newArr = arr.filter(function(el) {
	return el !== 1;
});
console.log(newArr.join(', '));