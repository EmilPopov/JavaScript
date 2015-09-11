function countRepeatingValue(array, element) {
		return array.filter(function(el) {
			return el === element;
		}).length;
	}
	(function() {
		var counter,
		array = [1, 2, 2, 3, 4, 4, 4, 4, 5],
			i;
		for (i = 0; i < array.length; i++)
			console.log('%s: %s times', i, countRepeatingValue(array, i));
	}())