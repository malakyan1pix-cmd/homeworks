const digits = [1, 2, 3];
const extraNumbers = {
    0: 1,
    1: 2,
    length: 2,
};
console.log(digits.concat(extraNumbers));

Object.defineProperty(extraNumbers, Symbol.isConcatSpreadable, {
    value: true
});
console.log(digits.concat(extraNumbers));

const bonus = [4, 5];
Object.defineProperty(bonus, Symbol.isConcatSpreadable, {
    value: false
});

console.log(digits.concat(bonus));


//For the object`
//extraNumbers now behaves like an array when concat'd,
//becouse we set Symbol.isConcatSpreadable = true

//For an array`
//the bonus stopped deploying, 
// becouse Symbol.isConcatSpreadable = false

//concat`
//the behavior has changed - you can now manually control the deployment

//we changed the behavior of the standed concat method,
//whitout changing the object type itself`