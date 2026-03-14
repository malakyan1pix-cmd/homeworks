//Task 1 -----------------------------------------------------------------------------------------------------------
let person1 = {
    name: "Anna",
    age: 18
};
let person2 = {
    age: 28,
    city: "Paris"
};
let mergedPerson = Object.assign({}, person1, person2);
console.log(mergedPerson);


//Task 2 ----------------------------------------------------------------------------------------------------------
let student = {
    name: "Ani",
    age: 25
};
Object.freeze(student);
student.age = 21;
console.log(student);


//Task 3 ----------------------------------------------------------------------------------------------------------
let delivery = true
let order = {
    food: "pizza"
};
if(delivery){
    order.delivery = "yes"
}
console.log(order);


//Task 4 ----------------------------------------------------------------------------------------------------------
let subjects = ["math", "physics", "biology"];
let grades = {};
for(let subject of subjects){
    grades[subject] = 90;
}
console.log(grades);


//Task 5 -----------------------------------------------------------------------------------------------------------
let obj = {
    a: 10,
    b: 20,
    c: 30
};
for(let key of Object.keys(obj)){
    console.log(obj[key]);
}


//Task 6 -----------------------------------------------------------------------------------------------------------
let products = {
    apple: 3,
    banana: 7,
    orange: 9
};
let entries = Object.entries(products);
let filtered = entries.filter(([key, value]) => value > 5);
let newProducts = Object.fromEntries(filtered);
console.log(newProducts);


//Task 7 ------------------------------------------------------------------------------------------------------------
function isEqual(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
let a = {
    name: "Anna", 
    age: 20
}
let b = {
    name: "Anna",
    age: 20
}
console.log(isEqual(a, b));