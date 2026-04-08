//Task 1------------------------------------
class Employee{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullname(){
        return this.firstName + " " + this.lastName;
    }
}
const emp = new Employee("Jhon", "Smith");
console.log(emp.fullname);


//Task 2------------------------------------
class Account {
    set password(value){
        if(value.length > 6){
            this._password = value;
        } else {
            console.log("Password too short");
        }
    }
    get password(){
        return this._password;
    }
}
const acc = new Account();
acc.password = "123";
acc.password = "123456789";
console.log(acc.password);


//Task 3------------------------------------
class Temperature{
    set celsius(value){
        this._celsius = value;
    }
    get fahrenheit(){
        return this._celsius * 9/5 + 32;
    }
}
const temp = new Temperature();
temp.celsius = 0;
console.log(temp.fahrenheit);


//Task 4------------------------------------
class Counter {
    constructor(){
        this._count = 0;
    }
    increment(){
        this._count++;
    }
    get count(){
        return this._count;
    }
}
    const counter = new Counter();
    counter.increment();
    counter.increment();
    console.log(counter.count);


//Task 5------------------------------------
class Product {
    set price(value){
        this._price = value;
    }
    get price(){
        return this._price * 0.9;
    }
}
const p = new Product();
p.price = 1000;
console.log(p.price);


//Task 6------------------------------------
class BankAccount {
    constructor(){
    this._balance = 0;
    }
    set deposit(value){
        if(value > 0){
            this._balance += value;
        } else {
            console.log("Invalid deposit");
        }
    }
    get balance(){
        return this._balance;
    }
}
const bank = new BankAccount();
bank.deposit = 100;
bank.deposit = -50; //Invalid deposit
console.log(bank.balance);


//Task 7------------------------------------
class Rectangle {
    set width(w){
        this._width = w;
    }
    set heigth(h){
        this._height = h;
    }
    get area(){
        return this._width * this._height;
    }
}
const  rect= new Rectangle();
rect.width = 5;
rect.heigth = 10;
console.log(rect.area);


//Task 8------------------------------------
class Email{
    set email(value){
        if(value.includes("@")){
            this._email = value;
        } else {
            console.log("Invalid email");
        }
    }
    get email(){
        return this._email;
    }
}
const e = new Email();
e.email = "test.com";
e.email = "test@mail.com";
console.log(e.email);


//Task 9------------------------------------
class Cart{
    constructor(){
        this._total = 0;
    }
    set add(value){
        this._total += value;
    }
    get total(){
        return this._total;
    }
}
const cart = new Cart();
cart.add = 100;
cart.add = 50;
console.log(cart.total);


//Task 10-----------------------------------
class Car{
    set spreed(value){
        if(value <= 200){
            this._spreed = value;
        } else {
            console.log("Too fast");
        }
    }
    get spreed(){
        return this._spreed;
    }
}
const car = new Car();
car.spreed = 180;
car.spreed = 250;
console.log(car.spreed);