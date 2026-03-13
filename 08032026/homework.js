let arr = [1, 2, 3, 4];

//Task 1 -----------------------------------------------------------------------
function forEach(array, callback){
    for(let i = 0; i < array.length; ++i){
        callback(array[i], i, array);
    }
}
forEach(arr, (v) => console.log(v));


//Task 2 -----------------------------------------------------------------------
function map(array, callback){
    let res = [];
    for(let i = 0; i < array.length; ++i){
        res.push(callback(array[i], i, array));
    }
    return res;
}
console.log(map(arr, v => v * 2));


//Task 3 -----------------------------------------------------------------------
function filter(array, callback){
    let res = [];
    for(let i = 0; i < array.length; ++i){
        if(callback(array[i], i, array)){
            res.push(array[i]);
        }
    }
    return res;
}
console.log(filter(arr, v => v % 2 === 0));


//Task 4 ------------------------------------------------------------------------
function some(array, callback){
    for(let i = 0; i < array.length; ++i){
        if(callback(array[i], i, array)){
            return true;
        }
    }
    return false;
}
console.log(some(arr, v => v > 3));


//Task 5 -----------------------------------------------------------------------
function every(array, callback){
    for(let i = 0; i < array.length; ++i){
        if(!(callback(array[i], i, array))){
            return false;
        }
    }
    return true;
}
console.log(every(arr, v => v < 3));


//Task 6 -----------------------------------------------------------------------
function indexOf(array, element){
    for(let i = 0; i < array.length; ++i){
        if(array[i] === element){
            return i;
        }
    }
    return -1;
}
console.log(indexOf(arr, 3));