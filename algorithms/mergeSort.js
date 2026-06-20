let comparisons = 0;
let mergeOperations = 0;
let recursiveCalls = 0;

 
function mergeSort(arr){
    recursiveCalls++;

    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let start = arr.slice(0, mid);
    let end = arr.slice(mid);

    start = mergeSort(start);
    end = mergeSort(end);

    return merge(start, end);
}

function merge(start, end){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < start.length && j < end.length){
        comparisons++;

        if(start[i] < end[j]){
            mergeOperations++;
            result.push(start[i]);
            i++;
        }
        else{
            mergeOperations++;
            result.push(end[j]);
            j++;
        }
    }

    while(i < start.length){
        mergeOperations++;
        result.push(start[i]);
        i++;
    }

    while(j < end.length){
        mergeOperations++;
        result.push(end[j]);
        j++;
    }
    return result;
}

const arr = [14, 21, 7, 15, 2, 8];
console.log(mergeSort(arr));

console.log("Comparisons:", comparisons);
console.log("Merge Operations:", mergeOperations);
console.log("Recursive Calls:", recursiveCalls);