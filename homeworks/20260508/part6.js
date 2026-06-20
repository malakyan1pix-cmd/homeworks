//Bonus Task --------------------------------------------------------------
function wait(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

wait(2000).then(() => {
    console.log("Done");
});



//Hard Challenge ----------------------------------------------------------
console.log("1");

setTimeout(() => {
    console.log("2");
    
    Promise.resolve().then(() => {
        console.log("3");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");

setTimeout(() => {
    console.log("6");
}, 0);


//1 -> Call stack -> Output
//2 -> Macrotask
//4 -> Microtask
//5 -> Call stack -> Output
//6 -> Macrotask
//4 -> Call stack -> Output
//2 -> Call stack -> Output
//3 -> Microtask
//3 -> Call stack -> Output
//6 -> Call stack -> Output


//Output`
//1
//5
//4
//2
//3
//6