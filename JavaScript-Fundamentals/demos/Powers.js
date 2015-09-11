function solve(params) {
.	var nk = params[0].split(' ').map(Number),
		k = nk[1],
		numbers = params[1].split(' ').map(Number),
		result = [],
		i,
		j,
		len,
		sum = 0,
		leftNeibor,
		rightNeibor;
	for (j = 0; j < k; j++) {
		for (i = 0; len = numbers.length, i < len; i++) {
			if (i === 0) {
				leftNeibor = numbers[numbers.length - 1];
				rightNeibor = numbers[i + 1];
			} else if (i === numbers.length - 1) {
				leftNeibor = numbers[i - 1];
				rightNeibor = numbers[0];
			} else {
				leftNeibor = numbers[i - 1];
				rightNeibor = numbers[i + 1];
			}
			if (numbers[i] === 0) {
				result.push(Math.abs(leftNeibor - rightNeibor));
			} else if (numbers[i] === 1) {
				result.push(leftNeibor + rightNeibor);
			} else if (numbers[i] % 2 === 0) {
				result.push(Math.max(leftNeibor, rightNeibor));
			} else if (numbers[i] % 2 !== 0) {
				result.push(Math.min(leftNeibor, rightNeibor));
			}
		}
		numbers = result.slice(0);
		result = [];
	}
	for (i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(sum);
}
var test1 = ['10 3',
	'1 9 1 9 1 9 1 9 1 9'
	
];
console.log(solve(test1));