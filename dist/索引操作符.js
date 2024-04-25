"use strict";
let k; //'name'|'age'
k = 'age';
//訪問操作符 T[k]
let k2;
//實際應用
let person1 = {
    name: 'tom',
    age: 35
};
function getValue(obj, keys) {
    return keys.map(key => obj[key]);
}
let result = getValue(person1, ['name', '']);
console.log(result);
function getValue1(obj, keys) {
    return keys.map(key => obj[key]);
}
getValue1(person, ['career']);
