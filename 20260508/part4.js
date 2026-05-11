//Task 12 -----------------------------------------------------------------
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");


//1 -> Call stack -> Output
//2 -> Makrotask
//3 -> Mikrotask
//4 -> Call stack -> Output

//Microtask are executed defore the Macrotask
//3 -> Call stack -> Output  
//2 -> Call stack -> Output

//Output`
//1
//4
//3
//2


//Task 13 ----------------------------------------------------------------
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

Promise.resolve().then(() => {
    console.log("C");
});

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");


//A -> Call stack -> Output
//B -> Mikrotask
//C -> Mikrotask
//D -> Makrotask
//E -> Call stack -> Output

//Microtask are executed defore the Macrotask
//FIFO(Macristack are executed completely are in order)

//B -> Call stack -> Output  
//C -> Call stack -> Output  
//D -> Call stack -> Output

//Output`
//A
//E
//B
//C
//D


//Task 14 ----------------------------------------------------------------
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
    Promise.resolve().then(() => {
        console.log("Promise inside timeout");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");


//Start -> Call stack -> Output
//setTimeout 1 -> Macrotask
//Promice 1 -> Microtask
//setTimeout 2 -> Macrotask
//End -> Call stack -> Output

//Starts Microtasks first`
//Promice 1 -> Call stack -> Output

//Now Macrotasks (FIFO order)`
//Timeout 1 -> Call stack -> Output
//Promise inside timeout -> Microtask(added during Macrotask)

//Microtasks again`
//Promise inside timeout -> Call stack -> Output
//Timeout 2 -> Call stack -> Output


//Output`
//Start
//End
//Promise 1
//Timeout 1
//Promise inside timeout
//Timeout 2