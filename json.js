// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'bananan']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
};

json = JSON.stringify(rabbit);  // stringify only data ( jump() -> X )
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'hyunjung' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump();  // error

console.log(rabbit.birthDate.getDate()); // (O) rabbit.birthDate type is Object
// console.log(obj.birthDate.getDate()); // (X) obj.birthDate type is string

// parse(json, reviver)
// reviver: A function that transforms the results
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate());  // (O) obj2.birthDate type is Object
