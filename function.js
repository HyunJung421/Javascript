// Function
// - fundamental building block in the program
// - subprogramm can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// nameing: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createCardAndPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const hyun = { name: 'hyun' };
changeName(hyun);
console.log(hyun);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');  // Hi! by unknown

// 4. Rest Parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {  // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// [anonymous function]
const printYes = function () {
    console.log('yes!');
};

// [named function]
// - better debugging in debugger's stack traces
// - recursions(재귀호출)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// [Arrow function]
// - always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;  // {} 사용시 return 필수
};

// IIFE: Immediately Invoked Function Expression (선언과 동시에 호출)
(function hello() {
    console.log('IIFE');
})();

// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            console.log(`${command}: ${a} + ${b} = ${a + b}`);
            break;
        case 'substract':
            console.log(`${command}: ${a} - ${b} = ${a - b}`);
            break;
        case 'divide':
            console.log(`${command}: ${a} / ${b} = ${a / b}`);
            break;
        case 'multiply':
            console.log(`${command}: ${a} * ${b} = ${a * b}`);
            break;
        case 'remainder':
            console.log(`${command}: ${a} % ${b} = ${a % b}`);
            break;
        default:
            console.log('unknown operator')
            break;
    }
}
calculate('multiply', 6, 7);
calculate('divide', 14, 7);