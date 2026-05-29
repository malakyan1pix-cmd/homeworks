function BubbleSort(arr){
    let steps = 0;

    for(let i = 0; i <= arr.length - 1; i++){

        for(let j = 0; j < arr.length - i - 1; j++){
            steps++;

            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return [arr, steps];
}


const arr = [5, 3, 8, 4, 2];
console.log(BubbleSort(arr));

