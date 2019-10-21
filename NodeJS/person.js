const employee = {
    name: 'John',
    age: 28
}

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My Name is ${this.name} and I'm ${this.age}`);
    }
}
module.exports = Person;


