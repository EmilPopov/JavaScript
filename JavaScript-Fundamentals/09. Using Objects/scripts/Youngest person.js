var people = [{
	firstname: 'Ivan',
	lastname: 'Stoikov',
	age: 32
}, {
	firstname: 'Bay',
	lastname: 'Ivan',
	age: 81
}, {
	firstname: 'Emil',
	lastname: 'Petrov',
	age: 44
}, {
	firstname: 'Gosho',
	lastname: 'Stoqnov',
	age: 12
}, {
	firstname: 'Dragan',
	lastname: 'Ivanov',
	age: 3
}, {
	firstname: 'Stoqn',
	lastname: 'Petrov',
	age: 78
}, ];

function findYoungestPerson(peopleArr) {
	function compareByAge(a, b) {
		if (a.age < b.age)
			return -1;
		if (a.age > b.age)
			return 1;
		return 0;
	}
	peopleArr.sort(compareByAge);
	console.log(peopleArr[0].firstname + peopleArr[0].lastname + peopleArr[0].age);	
}
findYoungestPerson(people);