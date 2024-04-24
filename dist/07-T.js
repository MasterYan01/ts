"use strict";
function print(arg) {
    console.log(arg);
    return arg;
}
function print_T(arg) {
    console.log(arg);
    return arg;
}
function logLength(arg) {
    //console.log(arg)
    return arg;
}
logLength('123456');
const a = logLength(['1', '2', '3']);
console.log(a.length);
//類型推斷
let e = (x = 1) => x + 1;
//類型斷言
const box = document.getElementById('img');
box.src = '';
