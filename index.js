
let name = "Luxin";
console.log(name);

const interestRate = 0.3;
console.log(interestRate);

let str = 'Hello'; //String Literal
let age = 23; //Number Literal
let isApproved = true; //Boolean Literal
let firstName; //Undefined
let lastName = null; // Explicity clear the value of a variable - an Object type

//Object
let person = {
    name: 'Luxin',
    age: 23
};

//Change - Dot Notation
person.name = 'Lucia';

//Change - Bracket Notation
person['name'] = 'Mary'; //Selection on runtime

let selection = 'name';
person[selection] = 'Penny';

console.log(person.name);
