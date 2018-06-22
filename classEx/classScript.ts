class Student {
    fullName: String;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + " " + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greet(person: Person) {
    return person.firstName + " " + person.lastName;
}

var user = new Student("Rubanraj", "R");

console.log(greet(user));