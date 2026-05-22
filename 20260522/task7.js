function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1, calls = 1){
    if(start <= end){
        
        let mid = Math.floor((end - start)/2 + start);
        if(arr[mid] === target){
            return{
                index: mid,
                calls: calls
            }

        }

        else if(arr[mid] < target){
            return binarySearchRecursive(arr, target, mid + 1, end, calls + 1);
        }

        else{
            return binarySearchRecursive(arr, target, start, mid - 1, calls + 1);
        }
    }
    return{
        index: -1,
        calls: calls
};
}


const arr = [1, 7, 10, 12, 17, 29, 32, 44, 63, 78, 84];
const target = 84;
console.log(binarySearchRecursive(arr, target));



