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

const arr = [5, 2, 4, 1];

insertionSortVisualize(arr);

