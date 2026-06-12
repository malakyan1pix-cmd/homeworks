let comparisons = 0;
let swaps = 0;
let recursiveCalls = 0;

function quickSortRandom(arr, low = 0, high = arr.length -1){
    recursiveCalls++;

    if(low < high){

        const pivot = partition(arr, low, high);

        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

function partition(arr, low, high){
    const random = Math.floor(Math.random() * (high - low + 1)) + low;

    swaps++;
    [arr[random], arr[high]] = [arr[high], arr[random]];

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


const arr = [15, 7, 11, 3, 6, 9];
console.log(quickSort(arr));

console.log("Comparisons:", comparisons);
console.log("Swaps:", swaps);
console.log("Recursive calls:", recursiveCalls);