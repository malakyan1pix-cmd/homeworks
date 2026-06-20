//Task 1---------------------------------------
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


//Task 2---------------------------------------
const names = ["anna", "john"];
const upper = names.map(n => n.toUpperCase());
console.log(upper);


//Task 3---------------------------------------
const users = [{name: "A", age:10}, {name: "B", age: 15}];
const ages = users.map(n => n.age);
console.log(ages);


//Task 4---------------------------------------
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(n => n % 2 === 0);
console.log(even);


//Task 5---------------------------------------
const users2 = [
    {name: "Anna", age: 17},
    {name: "Jhon", age: 20},
    {name: "Mark", age: 18}
];
const adults = users2.filter(u => u.age >= 18);
console.log(adults);


//Task 6---------------------------------------
const words = ["apple", "banana", "grapes", "kiwi"];
const longWords = words.filter(w => w.length > 5);
console.log(longWords);


//Task 7---------------------------------------
const names18 = users2.filter(u => u.age >= 18).map(u => u.name);
console.log(names18);


//Task 8---------------------------------------
const nums2 = [1, 2, 3, 4, 5];
const result = nums2.filter(n => n % 2 === 0).map(n => n * n);
console.log(result);


//Task 9---------------------------------------
const products = [
    {name: "Phone", price: 800},
    {name: "Laptop", price: 1500},
    {name: "TV", price: 1200}
];
const expensive = products.filter(p => p.price > 1000);
console.log(expensive);


//Task 10--------------------------------------
const users3 = [
    {name: "Anna", age: 17},
    {name: "John", age: 20}
];
const res = users3.filter(n => n.age > 18).map(u => `${u.name} is ${u.age} years old`);
console.log(res);
