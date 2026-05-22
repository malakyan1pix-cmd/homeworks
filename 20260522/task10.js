function searchInsert(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((end - start)/ 2 + start)
        
        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid] < target){
            start = mid + 1;
        }
            
        else{
            end = mid - 1;
        }
    }
    return start;
} 

const arr = [1, 3, 5, 7];
const target = 4;

console.log(searchInsert(arr, target));