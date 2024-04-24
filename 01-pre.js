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
