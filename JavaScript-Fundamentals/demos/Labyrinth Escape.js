function solve(input) {
	var size = input[0].split(' '),
		n = parseInt(size[0]),
		m = parseInt(size[1]),
		startPosition = input[1].split(' '),
		row = parseInt(startPosition[0]),
		col = parseInt(startPosition[1]),
		directions = input.slice(2),
		numbers = [],
		arrNum = [],
		visitedCells = [],
		visitedDirection,
		cells = 0,
		lastElement = 0,
		currentDir,
		currentNum,
		keyWord,
		sum = 0;

	for (var i = 1; i <= n; i++) {
		for (var j = lastElement + 1; j <= m * i; j++) {
			arrNum.push(j);
		}
		numbers.push(arrNum);
		lastElement = arrNum[arrNum.length - 1];
		arrNum = [];
	}
	for (var r = 0; r < 1000; r++) {
		if ((col === m || row === n) || (col === -1 || row === -1)) {
			keyWord = 'out';
			break;
		}
		visitedDirection = row.toString() + col.toString();

		if (visitedCells.indexOf(visitedDirection) === -1) {
			visitedCells.push(visitedDirection);
		} else {
			keyWord = 'lost';
			sum = cells;
			break;
		}
		currentDir = directions[row][col];
		currentNum = numbers[row][col];
		sum += currentNum;
		if (currentDir === 'l') {
			col -= 1;
		} else if (currentDir === 'r') {
			col += 1;
		} else if (currentDir === 'd') {
			row += 1;
		} else if (currentDir === 'u') {
			row -= 1;
		}
		cells += 1;
	}

	return keyWord + ' ' + sum;

}

var args = [
	"5 8",
	"0 0",
	"rrrrrrrd",
	"rludulrd",
	"lurlddud",
	"urrrldud",
	"ulllllll"
];

console.log(solve(args));
var direction = {
	u: {
		row: -1,
		col: 0
	},
	r: {
		row: 0,
		col: +1
	},
	d: {
		row: +1,
		col: 0
	},
	l: {
		row: 0,
		col: -1
	}
},
row += directions[dir].row,
col += directions[dir].col