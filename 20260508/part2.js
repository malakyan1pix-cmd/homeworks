//Task 5 ------------------------------------------------------------------
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

//Start -> Call stack -> Output
//Timeout -> Macrotask 
//End -> Call stack -> Output
//Timeout -> Call stack -> Output

//Output
//Start
//End
//Timeout


//Task 6 ------------------------------------------------------------------
setTimeout(() => console.log("A"), 1000);

setTimeout(() => console.log("B"), 0);

console.log("C");

//A -> Macrotask(1000)
//B -> Macrotask(0)
//C -> Call stack -> Output
//B -> Call stack -> Output
//A -> Call stack -> Output

//Output
//C
//B
//A


//Task 7 ------------------------------------------------------------------
function delay(message, time){
    setTimeout(() => {
        console.log(message);
    }, time);
}

delay("Hello", 3000);