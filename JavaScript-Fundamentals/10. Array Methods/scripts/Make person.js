function makePerson(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    };
}
var firstName = ['Asen', 'Angel', 'Boris', 'Georgi', 'Marin', 'Ana', 'Eli', 'Elena', 'Gergana', 'Mariika'],
    lastName = ['Ivanov', 'Dimitrov', 'Petrov', 'Georgiev', 'Nikolov', 'Borisova', 'Gigova', 'Atanasova', 'Ivanova', 'Georgieva'],
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    people = [];
people = arr.map(function(_, i) {
    return makePerson(firstName[i], lastName[i], Math.round(Math.random() * 100), (i > 4));
});
people.forEach(function(person) {
    console.log(person);
});
console.log('+++++++++++++++++++++++++++++++++ 2 +++++++++++++++++++++++++++++++ ');
//Problem 2
var isBiggerThan18 = people.every(function(person) {
    return person.age > 18;
});
console.log('Less than 18 : ' + isBiggerThan18);
console.log('++++++++++++++++++++++++++++++++ 3 ++++++++++++++++++++++++++++++++ ');
//problem 3 
var underagedPersons = people.filter(function(person) {
    return person.age < 18;
}).forEach(function(person) {
    console.log(person);
});
console.log('++++++++++++++++++++++++++++++ 4 ++++++++++++++++++++++++++++++++++ ');
//Problem 4
var averageAgeFemales = people.filter(function(person) {
    return person.gender === true;
}).reduce(function(s, person, _, arr) {
    return s + person.age / arr.length;
}, 0);
console.log(averageAgeFemales);
console.log('+++++++++++++++++++++++++++++ 5 +++++++++++++++++++++++++++++++++++ ');
//Problem 5
var youngestMalePerson = people.filter(function(person) {
    return person.gender === false;
}).sort(function(a, b) {
    return a.age - b.age;
});
console.log(youngestMalePerson[0].firstName + ' ' + youngestMalePerson[0].lastName + ': ' + youngestMalePerson[0].age);
console.log('+++++++++++++++++++++++++++++ 5 +++++++++++++++++++++++++++++++++++ ');
//Problem 6
var groupeByFirstLetter = people.reduce(function(group, person) {
    if (!group[person.firstName[0]]) {
        group[person.firstName[0]] = [person];
    } else {
        group[person.firstName[0]].push(person);
    }
    return group;
}, {});
console.log(groupeByFirstLetter);


