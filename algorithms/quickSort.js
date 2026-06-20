let comparisons1 = 0;
let swaps1 = 0;
let recursiveCalls1 = 0;

function quickSortFirst(arr, low = 0, high = arr.length - 1){
    recursiveCalls1++;

    if(low < high){

        const pivot = partition1(arr, low, high);
        
        quickSortFirst(arr, low, pivot - 1);
        quickSortFirst(arr, pivot + 1, high);
    }
    return arr;
}

function partition1(arr, low, high){
    const pivot = arr[low];
    let i = low;

    for(let j = low + 1; j <= high; j++){
        comparisons1++;

        if(arr[j] < pivot){
            i++;

            swaps1++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    swaps1++;
    [arr[low], arr[i]] = [arr[i], arr[low]];

    return i;
}

const arr1 = [5, 3, 8, 4, 2]
console.log(quickSortFirst(arr1));

console.log("Comparisons:", comparisons1);
console.log("Swaps:", swaps1);
console.log("Recursive calls:", recursiveCalls1);

//--------------------------------------------------------------------
let comparisons2 = 0;
let swaps2 = 0;
let recursiveCalls2 = 0;

function quickSortLast(arr, low = 0, high = arr.length - 1){
    recursiveCalls2++;

    if(low < high){

        const pivot = partition2(arr, low, high);
        
        quickSortLast(arr, low, pivot - 1);
        quickSortLast(arr, pivot + 1, high);
    }
    return arr;
}

function partition2(arr, low, high){
    const pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < high; j++){
        comparisons2++;

        if(arr[j] < pivot){
            i++;

            swaps2++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    swaps2++;
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}


const arr2 = [4, 7, 1, 9, 5];
console.log(quickSortLast(arr2));

console.log("Comparisons:",comparisons2);
console.log("Swaps:", swaps2);
console.log("Recursive calls:", recursiveCalls2);

//-----------------------------------------------------------------------
let comparisons3 = 0;
let swaps3 = 0;
let recursiveCalls3 = 0;

function quickSortMiddle(arr, low = 0, high = arr.length - 1){
    recursiveCalls3++;

    if(low < high){

        const pivot = partition3(arr, low, high);

        quickSortMiddle(arr, low, pivot - 1);
        quickSortMiddle(arr, pivot + 1, high);
    }
    return arr;
}

function partition3(arr, low, high){

    const mid = Math.floor((low + high) / 2);

    swaps3++;
    [arr[mid], arr[high]] = [arr[high], arr[mid]];

    const pivot = arr[high];

    let i = low - 1;

    for(let j = low; j < high; j++){
        comparisons3++;

        if(arr[j] < pivot){
            i++;

            swaps3++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    swaps3++;
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

let arr3 = [9, 3, 6, 7, 2, 8];
console.log(quickSortMiddle(arr3));

console.log("Comparisons:", comparisons3);
console.log("Swaps:", swaps3);
console.log("Recursive Calls:", recursiveCalls3);

//--------------------------------------------------------------------------
let comparisons4 = 0;
let swaps4 = 0;
let recursiveCalls4 = 0;

function quickSortRandom(arr, low = 0, high = arr.length -1){
    recursiveCalls4++;

    if(low < high){

        const pivot = partition4(arr, low, high);

        quickSortRandom(arr, low, pivot - 1);
        quickSortRandom(arr, pivot + 1, high);
    }
    return arr;
}

function partition4(arr, low, high){
    const random = Math.floor(Math.random() * (high - low + 1)) + low;

    swaps4++;
    [arr[random], arr[high]] = [arr[high], arr[random]];

    const pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < high; j++){
        comparisons4++;

        if(arr[j] < pivot){
            i++;

            swaps4++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    swaps4++;
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}


const arr4 = [15, 7, 11, 3, 6, 9];
console.log(quickSortRandom(arr4));

console.log("Comparisons:", comparisons4);
console.log("Swaps:", swaps4);
console.log("Recursive calls:", recursiveCalls4);