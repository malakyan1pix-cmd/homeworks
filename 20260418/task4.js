const account = {
    balance: 1000,
    currency: "USD",
    [Symbol.toPrimitive](hint){
        if(hint === "number"){
            return this.balance;
        }
        if(hint === "string"){
            return `Account Balance: ${this.balance} ${this.currency}`;
        }
        return this.balance;
    }
};
//+account converts the object to a number its balance is taken 
console.log(+account);

//String(account) converts the object to a string 
//text with the balance and currency is displayed 
console.log(String(account));

//account + 500 also converts the object to a number
//so the balance is taken and 500 is added
console.log(account + 500);