"use strict";
let names = ["nanda", "kumar"];
let mixedArray = [1, 2, 'nanda', 'kumar', true, true, true, true, true, true, true, true];
let mixes;
mixes = [...mixedArray];
console.log(mixes);
let person = {
    name: 'jon',
    age: 36,
    address: {
        city: 'erode'
    }
};
let student;
let a;
a = null;
console.log(typeof a);
let sum = (a, b) => a + b;
let mul;
mul = (a, b, c) => { return a + b + (c || 1); };
console.log(`%c result: ${mul(1, 2)}`, { color: 'green' });
mul = (a, b, c = 10) => { return a * b * c; };
console.log(`result: ${mul(1, 2)}`);
let createPerson;
createPerson = (name, age, email) => {
    return {
        name: name,
        age: age,
        email: email,
        birth: new Date()
    };
};
console.log(createPerson('name', 10, 'email'));
// function signature
let add;
let displayDetails;
displayDetails = (user) => {
    console.log(user);
};
displayDetails({ name: 'name', age: 12, email: 'email' });
