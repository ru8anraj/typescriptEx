interface Person {
    firstName: String,
    lastName: String,
    age: Number
}

function greet(person: Person) {
    return person;
}
var user = { firstName: "Rubanraj", lastName: "R", age: 23 };
console.log(greet(user));