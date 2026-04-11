function checkProperty(obj, key){
    if(obj === null || typeof obj !== "object" && typeof obj !== "function"){
        return "not found";
    }
    if(Object.prototype.hasOwnProperty.call(obj, key)){
        return "own";
    }
    let proto = Object.getPrototypeOf(obj);
    while(proto !== null)
{
    if(Object.prototype.hasOwnProperty.call(proto, key)){
        return "inherited";
    }
    proto = Object.getPrototypeOf(proto);
}
return "not found";
}

const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found

const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited