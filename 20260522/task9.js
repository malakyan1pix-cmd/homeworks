function searchString(arr, target, start = 0, end = arr.length - 1){
    if(start <= end){
        
        let mid = Math.floor((end - start)/2 + start);
        if(arr[mid] === target){
            return mid;
        }

        else if(arr[mid] < target){
            return searchString(arr, target, mid + 1, end);
        }

        else{
            return searchString(arr, target, start, mid - 1);
        }
    }
    return -1;
}

const arr1 = ["apple", "banana", "kiwi", "orange"];
const target1 = "kiwi";
console.log(searchString(arr1, target1));

