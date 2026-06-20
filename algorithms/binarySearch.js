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

//--------------------------------------------------------------------
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

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target1 = 8;

console.log(binarySearchIterations(arr1, target1));

//--------------------------------------------------------------
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

const arr2 = [1, 7, 10, 12, 17, 29, 32, 44, 63, 78, 84];
const target2 = 63;

console.log(binarySearchRecursive(arr2, target2));

//-------------------------------------------------------------------
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

const arr3 = [1, 7, 10, 12, 17, 29, 32, 44, 63, 78, 84];
const target3 = 84;

console.log(binarySearchRecursive(arr3, target3));

//--------------------------------------------------------------------------
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

const arr4 = ["apple", "banana", "kiwi", "orange"];
const target4 = "kiwi";

console.log(searchString(arr4, target4));

//---------------------------------------------------------------
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

const arr5 = [1, 3, 5, 7];
const target5 = 4;

console.log(searchInsert(arr5, target5));