function myIsSafeInteger(num){
    return(
        typeof num === "number" &&
        !Number.isNaN(num) &&
        num % 1 === 0 &&
        Math.abs(num) < 2 ** 53
    );

}
const num = 5;
console.log(myIsSafeInteger(num));