//Task 1 ------------------------------------------------------------------
    setTimeout(() => {
        console.log("Hello after 2 seconds");
    }, 2000);


//Task 2 -------------------------------------------------------------------
for(let i = 5; i >= 1; i--){
    setTimeout(() => {
        console.log(i);

        if(i === 1){
            console.log("Go!");
        }
    }, (6 - i) * 1000);
}


//Task 3 ------------------------------------------------------------------
const timer = setTimeout(() => {
    console.log("Executed");
}, 5000);

setTimeout(() => {
    clearTimeout(timer);
    console.log("Timeout canceled");
}, 2000);


//Task 4 ----------------------------------------------------------------
let num = 1;

function printNumber() {
    console.log(num);
    num++;
    
    setTimeout(printNumber, 1000);
}
printNumber();