function myIsFinite(value){
    return (
    typeof value === "number" &&
    value !== Infinity && 
    !Number.isNaN(value) &&
    value !== -Infinity
    );
}
const num = 10;
console.log(myIsFinite(num));