function binarySearchIterations(arr, target){

    let start = 0;
    let end = arr.length - 1;
    let iter = 0;

    while(start <= end){
        iter++;

        let mid = Math.floor((end - start)/2 + start);

        if(arr[mid] === target){
            return{
                index: mid,
                iterations: iter
            };

        } else if(arr[mid] < target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return{
        index: -1,
        iterations: iter
    };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 8;

console.log(binarySearchIterations(arr, target));