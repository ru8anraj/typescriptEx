var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greet(person) {
    return person.firstName + " " + person.lastName;
}
var user = new Student("Rubanraj", "R");
console.log(greet(user));
