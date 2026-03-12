function myStartsWith(str, search){
    for(let i = 0; i < search.length; ++i){
        if(str[i] !== search[i]){
        return false;
        }
    }
    return true;
}
const str = "javascript";
const search = "script";
console.log(myStartsWith(str, search));
