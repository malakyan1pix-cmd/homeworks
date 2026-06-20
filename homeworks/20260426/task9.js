const map = new Map([
    [1, 'num'], ['str', 'text'], [true, false]
]);

const iterator = map.entries();
let step = iterator.next();

while(!step.done){
    const [key, value] = step.value;

    if(typeof value === "string"){
        console.log([key, value]);
    }
    step = iterator.next();
}

// Input
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

// Expected Output in console
// [1, 'num']
// ['str', 'text']