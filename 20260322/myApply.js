//myApply------------------------------------------------------------------------
//arguments are accepted as an array
//the rest works the same as call
Function.prototype.myApply = function(thisArg, args) {
    if(thisArg === null || thisArg === undefined){
        thisArg = globalThis;
    }
    const key = Symbol();
    thisArg[key] = this;
    let res;
    if(!args){
        res = thisArg[key]();
    }else{
        res = thisArg[key](...args);
    }
    delete thisArg[key];
    return res;
}

//example 1
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}
const user = { name: "Joe Doe" };
console.log(showInfo.myApply(user, ["New-York", "USA"]));

//example 2
function multiply(a, b){
    return a * b;
}
console.log(multiply.myApply(null, [4, 6]));

//example 3
function greet(age){
    return `I am ${this.name} and I am ${age}`;
}
const user2 = {name: "Anna"};
console.log(greet.myApply(user2, [26]));
