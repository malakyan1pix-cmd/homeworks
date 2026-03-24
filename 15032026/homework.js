//Task 1 ------------------------------------------------------------------------
function curry(cb){
    let args = [];
    return function foo(...arr){
        args.push(...arr);
        if(args.length === cb.length){
            let res = cb(...args);
            args = [];
            return res;
        }
        return foo;  
    }
}
const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3));
console.log(sumFunc(1, 2)(3));
console.log(sumFunc(1, 2, 3));
console.log(prodFunc(1, 2, 3, 4));
console.log(prodFunc(1)(2, 3, 4));
console.log(prodFunc(1, 2)(3, 4));
console.log(prodFunc(1, 2, 3)(4));



//Task 2 ------------------------------------------------------------------------
function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    let memo = {};
    return function(n){
        if(n in memo) return memo[n];
        return memo[n] = cb(n);
    }
 }

const foo = memoize(factorial);
console.log(foo(5)); 
console.log(foo(5)); 


//Test 3 -----------------------------------------------------------------------
function pipe(...funcs) {
    return function(num){
        for(let i = 0; i < funcs.length; ++i){
            num = funcs[i](num);
        }
        return num;
    }
 }


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); 
console.log(func(2));


//Task 4 ------------------------------------------------------------------------
function trace(cb) {
    function wrapper(...cba){
        let args = cba;
        let output = cb(...args);
        wrapper.history.push({args, output});
        return output;
    }
    wrapper.history = [];
    return wrapper;
}

function add(a, b) {
 return a + b;
}

const tracedFunc = trace(add);
console.log(tracedFunc(1, 2)); 
console.log(tracedFunc(2, 4, 6)); 
console.log(tracedFunc.history); 

