const myIsInteger = (n) => {
    return(
        typeof n === "number" &&
        n % 1 === 0 &&
        Math.abs(n) !== Infinity 
    
    );
}
const num = 0;
console.log(myIsInteger(num));
