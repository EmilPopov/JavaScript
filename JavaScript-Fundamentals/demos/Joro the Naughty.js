function solve(input) {
	var sizeAndJumps = input[0].split(' '),
		rows = parseInt(sizeAndJumps[0]),
		cols = parseInt(sizeAndJumps[1]),
		jumpsNum = parseInt(sizeAndJumps[2]),
		startPosition = input[1].split(' '),
		row = parseInt(startPosition[0]),
		col = parseInt(startPosition[1]),
		jumps = input.slice(2),
		visited = {},
		keyWord,
		output;

	function getValueAt(row, col, cols) {
		return row * cols + col + 1;
	}
	var currentJumps,
		jumpCounter = 0,
		sum = 0;

	function inRange(value, border) {
		return 0 <= value && value < border;
	}


	for (var i = 0; i < jumpsNum; i++) {
		var cellValue = getValueAt(row, col, cols);
		if (!(inRange(row, rows)) || !(inRange(col, cols))) {
			keyWord = 'escaped';
			output = sum;
			break;
		}
		if (visited[getValueAt(row, col, cols)]) {
			keyWord = 'caught';
			output = jumpCounter;
			break;
		}
		visited[cellValue] = true;
		sum += cellValue;
		jumpCounter += 1;
		currentJumps = jumps[i].split(' ');
		row += parseInt(currentJumps[0]);
		col += parseInt(currentJumps[1]);
		if (i === jumpsNum -1) {
			i = -1;
		}
	}
	return keyWord + ' ' + output;
}
var test = ['6 7 3',
	'0 0',
	'2 2',
	'-2 2',
	'3 -1'
];
console.log(solve(test));