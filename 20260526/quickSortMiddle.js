let comparisons = 0;
let swaps = 0;
let recursiveCalls = 0;

function quickSortMiddle(arr, low = 0, high = arr.length - 1){
    recursiveCalls++;

    if(low < high){

        const pivot = partition(arr, low, high);

        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

function partition(arr, low, high){

    const mid = Math.floor((low + high) / 2);

    swaps++;
    [arr[mid], arr[high]] = [arr[high], arr[mid]];

    const pivot = arr[high];

    let i = low - 1;

    for(let j = low; j < high; j++){
        comparisons++;

        if(arr[j] < pivot){
            i++;

            swaps++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    swaps++;
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

let arr = [9, 3, 6, 7, 2, 8];
console.log(quickSort(arr));

console.log("Comparisons:", comparisons);
console.log("Swaps:", swaps);
console.log("Recursive Calls:", recursiveCalls);