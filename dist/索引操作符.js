"use strict";
//查詢操作符 keyof T
// interface Person {
//   name: string,
//   age: number
// }
// let k: keyof Person //'name'|'age'
// k = 'age'
class Ethan {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('speak');
    }
}
let PersonInter = {
    name: 'ethan',
    age: 35,
    speak() {
        console.log('first');
    }
};
function test(arg) {
    return arg;
}
test(10);
test(10);
function test1(a, b) {
    return b;
}
test1(10, 'hello');
function test3(arg) {
    return arg.length;
}
console.log(test3({ name: '123', length: 99 }));
