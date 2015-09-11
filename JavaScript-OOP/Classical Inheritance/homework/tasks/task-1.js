/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
	var Person = (function() {
		function Person(firstname, lastname, age) {
			this.firstname = firstname;
			this.lastname = lastname;
			this.age = age;
		}
		//firstname Property
		Object.defineProperty(Person.prototype, 'firstname', {
			get: function() {
				return this._firstname;
			},
			set: function(value) {
				validateName(value);
				this._firstname = value;
				return this;
			}
		});
		//lastName Property
		Object.defineProperty(Person.prototype, 'lastname', {
			get: function() {
				return this._lastname;
			},
			set: function(value) {
				validateName(value);
				this._lastname = value;
				return this;
			}
		});
		//age Property
		Object.defineProperty(Person.prototype, 'age', {
			get: function() {
				return this._age;
			},
			set: function(value) {
				validateAge(value);
				this._age = parseInt(value);
				return this;
			}
		});
		//fullname property
		Object.defineProperty(Person.prototype, 'fullname', {
			get: function() {
				return this.firstname + ' ' + this.lastname;
			},
			set: function(value) {
				var names = value.split(' ');
				this.firstname = names[0];
				this.lastname = names[1];
			}
		});
		//Attach new function
		Person.prototype.introduce = function() {
			return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old';
		};
		//=====================================================================
		function validateAge(age) {
			if (age < 0 || age > 150) {
				throw new Error('Age must always be a number in the range 0 150');
			}

		}

		function validateName(name) {
			var reg = new RegExp(/^[a-zA-Z]*$/);
			if ((3 > name.length) || (name.length > 20)) {
				throw new Error('Invalid name length');
			} else if (!(reg.test(name))) {
				throw new Error('Name must containing only Latin letters');
			}
		}

		return Person;
	}());
	return Person;

}
module.exports = solve;