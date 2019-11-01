//Classes in Javascript ES5

var Person5 = function(name, yearOfBirth, city) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.city = city;
}

Person5.prototype.calculateAge = 
function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var cydev5 = new Person5('Cy Dev', 1996, 'Nairobi');


//Classes in Javascript ES6

class Person6 {
    constructor (name, yearOfBirth, city) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
    }
    calculateAge() {
        var age = new Date().getFullYear - 
        this.yearOfBirth;
        console.log(age);
        }
}

const cydev6 = new Person6('Cy Dev', 1996, 'Nairobi');

// Classes use constructur