// Task 1------------------------------------
function sum(a, b, c){
    return a + b + c;
}
const arr1 = [10, 20, 30];
console.log(sum.apply(null, arr1));
 

//Task 2------------------------------------
function printResult(){
    console.log(this.name + " scored " + this.score);
}
const student1 = {name: "Anna", score: 80};
const student2 = {name: "Mark", score: 95};

printResult.call(student1);
printResult.apply(student2);


//Task 3-------------------------------------
const user = {
    name: "Joe",
    greet(){
        return "Hello " + this.name;
    }
};
const admin = {
    name: "Admin"
};
console.log(user.greet.call(admin));


//Task 4-------------------------------------
const numbers = [5, 12, 8, 20, 3];
console.log(Math.max.apply(null, numbers));


//Task 5--------------------------------------
const obj1 = {
    value: 10,
    getValue(){
        return this.value;
    }
};
const obj2 = {
    value: 30
};
console.log(obj1.getValue.call(obj2));


//Task 6------------------------------------
function total(a, b, c){
    return a + b + c;
}
const args = [7, 8, 9];
console.log(total.apply(null, args));


//Task 7-------------------------------------
function show() {
 return this.name;
}
const obj = { name: "Test" };
const bound = show.bind(obj);

console.log(bound.call({ name: "Wrong" })); //Result: Test
//bind permanently fixed this, call can no longer change it


//Task 8------------------------------------
function showPoints(){
    return `${this.name} has ${this.points} points`;
}
const p1 = {name: "Anna", points: 10 };
const p2 = {name: "Mark", points: 25 };
console.log(showPoints.call(p1));
console.log(showPoints.call(p2));


//Task 9------------------------------------
function execute(fn, arr){
    return fn.apply(null, arr);
}
function sum(a, b, c){
    return a + b + c;
}
console.log(execute(sum, [2, 4, 6]));


//Task 10-----------------------------------
function show() {
 return this.name;
}

const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);

console.log(fn.call(b)); //Result: A


//Task 11-----------------------------------
const obj3 = {
 value: 100,
 get() {
   function inner() {
     return this.value;
   }
   return inner.call(this); //without call(this), this is lost
 }
};
console.log(obj3.get());


//Task 12------------------------------------
const obj4 = {
  value: 1,
  add(x) {
    this.value += x;
    return this;
  }
};
obj4.add(5).add(10);
console.log(obj4.value);