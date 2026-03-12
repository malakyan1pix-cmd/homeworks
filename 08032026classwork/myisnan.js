function myisNaN(value){
    return value !== value;

}
const num = NaN;
console.log(myisNaN(num));