let res;
let str1 = "hello";



//count the number of characters
function countChars(str){
    return str.length;
}
res = countChars(str1);
console.log(res);


//converts the string to uppercase
function toUpper(str){
    return str.toUpperCase();
}
res = toUpper(str1);
console.log(res);


//return the sum
let x = 12;
let y = 7;
function sum(x, y){
    return x + y;
}
res = sum(x, y);
console.log(res);


//reverse the string
function revString(str){
    let res = "";
    for(let i = str.length - 1; i >= 0; i--){
        res += str[i];
    }
    return res;
}
res = revString(str1);
console.log(res);


//contains the substring "Java"  
let str2 = "Learning JavaScript";
function containsJava(str){
    return str.includes("Java");
}
console.log(containsJava(str2));


//find index
let numList = [3, 6, 9, 12]
function findindex(numlist){
    return numlist.indexOf(9);
}
console.log(findindex(numList));


//sum of elements
let expenses = [50, 75, 100];
function sumArray(arr){
    let res = 0;
    for(let num of arr){
        res += num;
    }
    return res;
}
res = sumArray(expenses);
console.log(res);


//substring check
function substring(str, sub){
    return str.includes(sub);
}
console.log(substring(str2,str1));


//the sum of all elements of the array
function sumArr(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
res = sumArr(numList);
console.log(res);


//even or add numbers
function isEven(num){
    return num % 2 === 0 ? "Even" : "Add"
}
console.log(isEven(x), isEven(y));


//type value
function type(value){
    if(value === null){
        return "null"; 
    }
    if(Array.isArray(value)){
        return "array";   
    }
    return typeof value;
}
console.log(type(null));


//true or false
function isFalsy(value){
    return !value;
}
console.log(isFalsy(0), isFalsy(5));


//loose and strict comparison
function compare(a, b){
    return{
        loose: a == b,
        strict: a === b
    };
}
console.log(compare(7, "7"), compare("hello", 65));


//checking for a valid number
function isValidNumber(value){
    return typeof value === 
    "number" && !isNaN(value) && Number.isFinite(value) && Number.isSafeInteger(value);
}
console.log(isValidNumber(53.4), isValidNumber(43));


//convert a value to a number
function toNumber(value){
    let num = Number(value);
    return isNaN(num) ? null :num;
}
console.log(toNumber("hello"), toNumber("43"));


//convert to boolean
function toBoolean(value){
    return Boolean(value);
}
console.log(toBoolean(x > y), toBoolean(x < y), toBoolean(x - y), toBoolean(0));


//only plain object
let num = {
    a : 20,
    b : 30
}
function isPlainObject(value){
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
console.log(isPlainObject(num));


//check for primitive
function isPrimitive(value){
    return value !== Object(value);
}
console.log(isPrimitive(7), isPrimitive(num));


//sum of two numbers or "invalid input"
function sumNumbers(a, b){
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }
    return "Invalid input";
}
console.log(sumNumbers("43", 45), sumNumbers(54, 20), sumNumbers(str1, str2));
