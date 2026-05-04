const cache = new WeakMap();

function heavyCalc(obj){
    if(cache.has(obj)){
        return cache.get(obj);
    }
    for(let i = 0; i < 1e7; ++i){}
    const res = obj.value * obj.value;

    cache.set(obj, res);
    return res;
}


// Input
const dataObj = { value: 10 };

// Expected Output
console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100