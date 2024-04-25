"use strict";
function getFruits(f) {
    switch (f.kind) {
        case 'apple':
            return f.color;
        case 'banana':
            return f.color;
        case 'orange':
            return f.color;
        default:
            throw new Error('fruits error');
    }
}
let f = {
    kind: 'apple',
    color: 'red'
};
let res = getFruits(f);
console.log(res);
