var obj = {
	fName: 'Gogo',
	lName: "Ivanov",
	age: 22,
	fullName: function() {
		return fName + ' ' + lName;
	}
};

function hasProperty(obj, property) {
    for (var prop in obj) {
    	if (property === prop) {
           console.log('Yes ' + prop + ': ' + obj[prop]);
    	}
    }
}
hasProperty(obj, 'age');
