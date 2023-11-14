
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


//Array
let selectColors = ['red', 'blue'];
console.log(selectColors);

//Adding in the back
selectColors[2] = 'green';
console.log(selectColors[0]);
console.log(selectColors);

//Can add another type
selectColors[3] = 1;
console.log(selectColors);

//Length
console.log(selectColors.length);


//Function - Performing a task
function greet(name, lastName){ //name - parameter
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith'); //Argument


//Calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);