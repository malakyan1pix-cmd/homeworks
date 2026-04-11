function myInstanceOf(obj, Constructor){
    if(obj === null || typeof obj !== "object" && typeof obj !== "function"){
        return false;
    }
    if(typeof Constructor !== "function"){
        return false;
    }
    let proto = Object.getPrototypeOf(obj);
    while(proto !== null){
    if(proto === Constructor.prototype){
        return true;
    }
    proto = Object.getPrototypeOf(proto);
}
return false;
}



function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false

console.log(myInstanceOf(null, Object)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf("hello", String)); // false
