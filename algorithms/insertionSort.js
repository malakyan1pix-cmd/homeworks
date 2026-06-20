function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){

        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const arr = [5, 2, 9, 1, 7];

console.log(insertionSort(arr));

//--------------------------------------------------------------
function insertionSortDescending(arr){
    for(let i = 1; i < arr.length; i++){

        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] < key){
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const arr1 = [4, 1, 8, 3];

console.log(insertionSortDescending(arr1));

//-------------------------------------------------------
function insertionSortObjects(arr){
    for(let i = 1; i < arr.length; i++){

        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j].age > key.age){
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const arr2 = [
  { name: "Anna", age: 22 },
  { name: "John", age: 18 },
  { name: "Mike", age: 30 }
]

console.log(insertionSortObjects(arr2));

//--------------------------------------------------
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

const arr3 = [5, 2, 9, 1, 7];

console.log(insertionSortRecursive(arr3));

//------------------------------------------------------------
function  insertionSortVisualize(arr){
    for(let i = 0; i < arr.length; i++){

        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        } 
        arr[j + 1] = key;
        console.log(`Step ${i}:`, [...arr]);
    }
}

const arr4 = [5, 2, 4, 1];

insertionSortVisualize(arr4);

//------------------------------------------------------------------