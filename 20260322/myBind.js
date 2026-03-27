//myBind ------------------------------------------------------------------------
Function.prototype.myBind = function(thisArg, ...args) {
    const fn = this;  //keep the original
    return function(...callArgs){  //return new function 
    if(thisArg === null || thisArg === undefined){
        thisArg = globalThis;
    }  
    const key = Symbol();  
    thisArg[key] = fn;  
    const res = thisArg[key](...args, ...callArgs); //impoverish the arguments
    delete thisArg[key]; //delete function
    return res;
}
}

//example 1
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}
const user = { name: "Joe Doe" };
const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));

//example 2
function fullName(lastname){
    return `${this.firstname} ${lastname}`;
}
const person = {name: "Anna"}
const boundFullName = fullName.myBind(person);
console.log(boundFullName("Smith"));

//example 3
function add(a, b){
    return a + b;
}
const boundAdd = add.bind(null, 10);
console.log(boundAdd(20));