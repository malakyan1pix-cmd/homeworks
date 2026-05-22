function insertionSortRecursive(arr, n = arr.length){
    if(n <= 1){
        return arr;
    }

    insertionSortRecursive(arr, n - 1);

    let key = arr[n - 1];
    let j = n - 2;

    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
    return arr;
}

const arr = [5, 2, 9, 1, 7];

console.log(insertionSortRecursive(arr));