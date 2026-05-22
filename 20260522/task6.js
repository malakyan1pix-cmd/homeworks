function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1){
    if(start <= end){
        
        let mid = Math.floor((end - start)/2 + start);
        if(arr[mid] === target){
            return mid;
        }

        else if(arr[mid] < target){
            return binarySearchRecursive(arr, target, mid + 1, end);
        }

        else{
            return binarySearchRecursive(arr, target, start, mid - 1);
        }
    }
    return -1;
} 


const arr = [1, 7, 10, 12, 17, 29, 32, 44, 63, 78, 84];
const target = 63;
console.log(binarySearchRecursive(arr, target));
