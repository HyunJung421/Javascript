'use strict';
// Objects 
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {};  // 'object literal' syntax
const obj2 = Object();  // 'object constructor' syntax

function print(person) {
    console.log(`name:${person.name}`);
    console.log(`age:${person.age}`);
}

const hyun = { name:'hyunjung', age:23 }
print(hyun);

// with JavaScript magic (dynamically typed language)
// can add properties later
hyun.hasJob = true;
console.log(hyun.hasJob); 

// can delete properties later
delete hyun.hasJob;
console.log(hyun.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(hyun.name);  
console.log(hyun['name']); // 동적으로 키를 받을 때 사용
hyun['hasJob'] = true;
console.log(hyun.hasJob);

function printValue(obj, key) {
    // console.log(obj.key); // undefined
    console.log(obj[key]);
}

printValue(hyun, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('elie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in hyun);  // true
console.log('random' in hyun);  // false

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in hyun) {
    console.log(hyun.key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); 

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue
console.log(mixed.size);