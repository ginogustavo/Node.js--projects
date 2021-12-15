const fs = require("fs"); // importing fs module
fs.writeFileSync("TestFile.txt", "Hello from Node.js");

//review function
function processMsg(userName, userAge) {
  return `The user ${userName} is ${userAge} years old`;
}
//using anonymous funcion (although we give a name as constant)
const processingFunc = function (userName, userAge) {
  return `The user ${userName} is ${userAge} years old`;
};
const procFuncAnonymous = (userName, userAge) => {
  return `The user ${userName} is ${userAge} years old`;
};

console.log(processMsg("Luke", 15));
console.log(processingFunc("John", 14));
console.log(procFuncAnonymous("Mathew", 16));

const adding = (a, b) => a + b; // when it's one line ommit curly braces and return keyword

//if you have one argument you can remove the parenthisis
const addOne = (a) => a + 1;

//if function has no argument, specify that by ()
const addRandom = () => 1 + 2;

//Objects
const person = {
  name: "Gino",
  age: 30,
  greet: function () {
    // in objects Arrow function will not interpret "this"
    console.log("Hi, I am " + this.name);
  },
  greet2() {
    console.log("2nd option of method declaration");
  },
};

person.greet();

// Arrays
const hobbies = ["sports", "cooking"]; // can have objects, boolean, number, etc
for (let hobby of hobbies) {
  console.log(hobby);
}
// inside the function you defind how to add elements in the array
//executed in every elment in the Array, and return the updated version of the array
console.log(hobbies.map((hobby) => "My Hobby " + hobby));
console.log(hobbies);

//**************************************** */

// Primitive types: are copied by value.
//Stored in STACK (short-lived, quick and limited memory space)
//String, Number, Boolean, undefined, Null, Symbol(ES6)
//---------------
let fname = "Gino";
console.log(fname);

let secondName = fname; //takes to content of name and copies it
console.log(secondName);

fname = "Gustavo"; //depite I changed the original variable'value
console.log(secondName); // the old value was copied to this other variable

//reference types: Stored in HEAP (take little bit longer to access but can hold much info)
//Obj and array
//---------------
let personObj = {
  age: 30,
  name: "Gino",
  hobbies: ["Sport", "Cooking"],
};
console.log(personObj);

let secondPersonObj = personObj;
// we copied the pointer(in Stack) which reference the same object(in Heap)
console.log(secondPersonObj);

personObj.name = "Gustavo";
//therefore if changed the original obj's values, the other variable(with the same pointer) will see that
console.log(secondPersonObj);

//to create a new object based on another
let thirdPersonObj = Object.assign({}, personObj);
//1. first argument can be any object, no need to be an empty
//2. this method assign is merging whatever the first argument object is with the 2nd one.

//Known Issue: even if you clone the object, when changing the array,
//still reference the original one, because Object.assign does not
//perform an deep clone. it copied the object but inside objects and
//arrays are just new pointers to the original object/array

//to make a copy of the array, one option is to use slide() a built-in method of arrays.
//if you don pass any argument it just copy the entire array

let myHobbies = personObj.hobbies.slice();

/**********************************************/
//reference types arrays

const hobbies2 = ["sports", "coooking"]; // what is stored is an address(pointer)
hobbies2.push("Programming");
console.log(hobbies2);
// Q: Why can I modify a const?
// A: Reference types only stores a pointer to an address in memory where the array
// is stored. That pointer has not changed by adding a new element.
//(the object that is being pointed has changed but that doesn't matter here)

//***************************************** */

//const copiedArray = hobbies2.slice()
//const copiedArray = [hobbies2]; // [["sports", "coooking"]] // array with 1 array inside

const copiedArray = [...hobbies2];
//... (spread operator) takes the the array or object after and pull out all the
//elements or properties and put it to whatever is around that spread operator.

console.log(copiedArray); // is a copy of the old one

const copiedPerson = { ...personObj };
console.log(copiedPerson);

//Rest operator (same ... ) the name depends where you used.
const toArray0 = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};

//takes all the arguments and bundle them up for us
//here args will be an array
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 5));
console.log(toArray(1, 2, 3, 4, 5, 6, 7, 8));

// *********************************** /
//Desctruction : comes from dropping the data we don't need

const printName0 = (personData) => {
  console.log(personData.name);
};

const printName = ({ name }) => {
  //also the other properties and funcions{name, age, greet}
  console.log(name);
};

printName(personObj);

// No only function but for creating new variables out of objects
//names of variables have to match
const { name, age } = personObj; //  Object Destructuring, pulled out by name
console.log(name, age);

//destructing arrays
const [h1, h2] = hobbies2; // Array destructuring, pulled out by position
console.log(h1, h2);
