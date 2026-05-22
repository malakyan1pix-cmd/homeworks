function binarySearch(arr, target){

    let start = 0;
    let end = arr.length - 1;

    while(start <= end){

        let mid = Math.floor((end - start)/2 + start);

        if(arr[mid] === target){
            return mid;
        } else if(arr[mid] < target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return -1;
}

const arr = [1, 3, 5, 7, 9];
const target = 7;

console.log(binarySearch(arr, target));