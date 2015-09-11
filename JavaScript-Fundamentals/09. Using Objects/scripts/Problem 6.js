var people = [{
	firstname: 'Emil',
	lastname: 'Stoikov',
	age: 32,
	fullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}, {
	firstname: 'Bay',
	lastname: 'Ivan',
	age: 81,
	fullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}, {
	firstname: 'Emil',
	lastname: 'Petrov',
	age: 44,
	fullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}, {
	firstname: 'Gosho',
	lastname: 'Stoqnov',
	age: 12,
	fullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}, {
	firstname: 'Gosho',
	lastname: 'Ivanov',
	age: 3,
	fullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}, {
	firstname: 'Gosho',
	lastname: 'Petrov',
	age: 78,
	fullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}, ];

function groupByProp(arr, prop) {
	var groupedArr = [];

	for (var i = 0, len = arr.length; i < len; i++) {
		if (!groupedArr[arr[i][prop]]) {
			groupedArr[arr[i][prop]] = [];
		}
		groupedArr[arr[i][prop]].push(arr[i]);
	}

	return groupedArr;
}
var groupByFirstName = groupByProp(people, 'firstname');
for (var prop in groupByFirstName) {
	console.log(prop + ':');
	for (var i = 0; i < groupByFirstName[prop].length; i++) {
		console.log(groupByFirstName[prop][i].fullName());
	}


}