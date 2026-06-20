function linearSearch (arr, target){
    let steps = 0;
 
    for(let i = 0; i < arr.length; i++){
        steps++;

        if(arr[i] === target){
            return [i, steps];
        }
    }
    return -1;
    
}


const arr = [10, 20, 30, 40, 50];
const target = 30;
console.log(linearSearch(arr, target));
