function myIndexOf(str, search){
    for(let i = 0; i = search.length; ++i){
        if(str[i] === search[i]){
            return i;
        }
    }
    return -1;
}
const str = "hello world";
const search = "world";
var res = myIndexOf(str, search);
console.log(res);