function multiplesOfFive(){
	var numbers = [];
	for (var i = 0; i < 20; i++) {
		numbers.push(i * 5);
	}
	return numbers;
}
console.log(multiplesOfFive());