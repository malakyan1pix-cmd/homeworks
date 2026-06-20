class SearchUtility{
    insertionSort(arr){
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

    iterativeBinarySearch(arr, target){
        let start = 0;
        let end = arr.length - 1;

        while(start <= end){
            let mid = Math.floor((end - start)/ 2 + start);
            
            if(arr[mid] === target){
                return mid;
            }

            else if(arr[mid] < target){
                start = mid + 1;
            }

            else{
                end = mid - 1;
            }
        }
        return -1;
        
    }

    recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1){
        if(start <= end){
        
            let mid = Math.floor((end - start)/ 2 + start);

            if(arr[mid] === target){
                return mid;
            }

            else if(arr[mid] < target){
                return this.recursiveBinarySearch(arr, target, mid + 1, end);
            }

            else{
                return this.recursiveBinarySearch(arr, target, start, mid - 1);
            }
        }
        return -1;
    }
}


const utils = new SearchUtility();

console.log(utils.insertionSort([4, 1, 3]));
console.log(utils.iterativeBinarySearch([1, 2, 3], 2));