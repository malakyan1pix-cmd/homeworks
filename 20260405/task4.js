function getPrototypeMethods(obj){
    if(obj === null || (typeof obj !== "object" && typeof obj !== "function")){
        return [];
    }
    const proto = Object.getPrototypeOf(obj);
    if(proto === null || proto === Object.prototype){
        return [];
    }
    const keys = Object.getOwnPropertyNames(proto);
    return keys.filter(key => typeof proto[key] === "function" && key !== "constructor");

}


function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
  return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"]
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true


const base = {
  x: 10,
  print() {
    return "hello";
  }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []