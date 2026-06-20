//myCall-----------------------------------------------------------------------------------------------------------
Function.prototype.myCall = function(thisArg, ...args) {
    if(thisArg === null || thisArg === undefined){
       thisArg = globalThis;
    }  //checking for null and undefined values
    const key = Symbol();  //unique key
    thisArg[key] = this;  //temporarily add a function to the object
    const res = thisArg[key](...args);  //call a function 
    delete thisArg[key];  //delete temporary property
    return res; //return the result 
}

//example 1 
function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}
const user = { name: "Joe Doe" };
console.log(showInfo.myCall(user, "New-York", "USA"));

//example 2
function greet(age){
    return `Hi, I am ${this.name} and I am ${age}`;
}
const user2 = {name: "Jony"}
console.log(greet.myCall(user2, 20));

//example 3
function add(a, b){
    return a + b;
}
console.log(add.myCall(null, 5, 8));