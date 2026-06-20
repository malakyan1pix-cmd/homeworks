Array.prototype.mySum = function(){
    if(this.length === 0){
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < this.length; ++i){
        const value = this[i];
        if(typeof value !== "number" || Number.isNaN(value)){
            throw new Error("All elements must be valid numbers");
        }
        sum += value;
    }
    return sum;
};



console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error