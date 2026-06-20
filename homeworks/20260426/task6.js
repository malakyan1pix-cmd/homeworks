function intersection(set1, set2){
    const set = new Set();
    for(let value of set1){
        if(set2.has(value)){
            set.add(value);
        }
    }
    return set;
}


function difference(set1, set2){
    const set = new Set();
    for(let value of set1){
        if(!set2.has(value)){
            set.add(value);
        }
    }
    return set;
}

// Input
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

// Expected Output
console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }