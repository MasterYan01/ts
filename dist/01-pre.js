"use strict";
//ts筆記
//npm i -g typescript
//tsc --init
//tsc --watch
//string
let pname = 'tom';
let nameStr = `姓名${pname}`;
pname = 'jay';
//number
let fruits = ['apple', 'orange', 'banana'];
fruits.push('lemon');
let turple = ['abc', 123, true];
function add(x, y, z) {
    console.log(x, y, z);
}
add(1, 'abc', true);
function add1(x, y) {
    return x + y;
}
let add2 = (x, y) => {
    return x + y;
};
//公式:變量名:類型 = 賦值
let add3; //函數類型
add3 = add2;
function person(name, age, career) {
    console.log(`姓名${name}年齡${age}職業${career ? career : '無業'}`);
}
person('ethan', 35, 'cooker');
// type-c線
const obj = {
    name: 'jack',
    age: 25,
    career: 'coder',
    sex: 'female'
};
const personMan = {
    name: 'ethan',
    age: 34,
    sex: 'man',
};
const boy = {
    name: 'sb',
    age: 35,
    fan: 'play'
};
//基本寫法(封裝)
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() { }
    speak() { }
}
//多態
class Dog extends Animal {
    speak() {
        console.log(this.name + '旺旺~~');
    }
    eat() {
        console.log('吃肉~~');
    }
}
const dog1 = new Dog('tom');
dog1.eat();
class Cook {
    step1() {
        console.log('1');
        return this;
    }
    step2() {
        console.log('2');
        return this;
    }
    step3() {
        console.log('3');
        return this;
    }
    step4() {
        console.log('4');
        return this;
    }
}
const mycook = new Cook;
// mycook.step1().step2().step3().step4()
console.log(mycook.step1().step2().step3().step4());
