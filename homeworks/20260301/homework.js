// Task 1 ---------------------------------------------------------------------------------------------------
function isEven(n){
    return n % 2 === 0;
}
var Even1 = 2;
var Even2 = 7;
var Even3 = 0;
console.log(isEven(Even1), isEven(Even2), isEven(Even3));


//Task 2 ----------------------------------------------------------------------------------------------------
function sumUpTo(n){
    var sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}
var sumupto1 = 1;
var sumupto2 = 5;
var sumupto3 = 10;
console.log(sumUpTo(sumupto1), sumUpTo(sumupto2), sumUpTo(sumupto3));


//Task 3 ----------------------------------------------------------------------------------------------------
function minInArray(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
var minarr1 = [3, 1, 5];
var minarr2 = [-2, -10, 0];
var minarr3 = [7];
console.log(minInArray(minarr1), minInArray(minarr2), minInArray(minarr3));


//Task 4 ------------------------------------------------------------------------------------------------------
function countDigits(n){
    n = Math.abs(n);
    if(n === 0) return 1;
    let count = 0;
    while(n > 0){
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}
var countdig1 = 12345;
var countdig2 = 0;
var countdig3 = -98;
console.log(countDigits(countdig1), countDigits(countdig2), countDigits(countdig3));


//Task 5 -------------------------------------------------------------------------------------------------------
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
var sumarr1 = [1, 2, 3];
var sumarr2 = [-1, 1];
var sumarr3 = [5];
console.log(sumArray(sumarr1), sumArray(sumarr2), sumArray(sumarr3));


//Task 6 -------------------------------------------------------------------------------------------------------
function average(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum / arr.length;
}
var average1 = [2, 4, 6];
var average2 = [1, 1, 1, 1];
var average3 = [5];
console.log(average(average1), average(average2), average(average3));


//Task 7 ------------------------------------------------------------------------------------------------------
function countChar(str, char){
    let count = 0;
    for(let ch of str){
        if(ch === char){
            count++;
        }
    }
    return count;
}
var str1 = "hello";
var char1 = "l";
var str2 = "JavaScript";
var char2 = "a";
var str3 = "abc";
var char3 = "d";
console.log(countChar(str1, char1), countChar(str2, char2),countChar(str3, char3));


//Task 8 ------------------------------------------------------------------------------------------------------
function removeFirstChar(str){
    return str.slice(1);
}
var rechar1 = "hello";
var rechar2 = "a";
var rechar3 = "";
console.log(removeFirstChar(rechar1), removeFirstChar(rechar2), removeFirstChar(rechar3));


//Task 9 -----------------------------------------------------------------------------------------------------
function power(base, exp){
    let res = 1;
    for(let i = 0; i < exp; i++){
        res *= base;
    }
    return res;
}
var base1 = 2;
var base2 = 5;
var base3 = 3;
var exp1 = 3;
var exp2 = 0;
var exp3 = 2;
console.log(power(base1, exp1), power(base2, exp2), power(base3, exp3));


//Task 10 --------------------------------------------------------------------------------------------------
function contains(arr, value){
    return arr.includes(value);
}
var arr1 = [1, 2, 3];
var arr3 = [];
var value1 = 2;
var value2 = 5;
var value3 = 1;
console.log(contains(arr1, value1), contains(arr1, value2), contains(arr3, value3));


//Task 11 -------------------------------------------------------------------------------------------------
function repeatString(str, n){
    let res = "";
    for(let i = 0; i < n; i++){
        res += str;
    }
    return res;
}
var string1 = "a";
var string2 = "hi";
var string3 = "x";
var num1 = 3;
var num2 = 1;
var num3 = 0;
console.log(repeatString(string1, num1), repeatString(string2, num2), repeatString(string3, num3));


//Task 12 -----------------------------------------------------------------------------------------------
function firstAndLast(arr){
    if(arr.length === 0) return [];
    if(arr.length === 1) return arr[0], arr[0];
    return [arr[0], arr[arr.length - 1]];
}
var fal1 = [1,2,3];
var fal2 = [5, 5];
var fal3 = [];
console.log(firstAndLast(fal1), firstAndLast(fal2), firstAndLast(fal3));
