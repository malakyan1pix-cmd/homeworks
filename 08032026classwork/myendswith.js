function myEndsWith(str, search){
    let start = str.length - search.length;
    for(let i = 0; i < search.length; i++){
        if(str[start + i] !== search[i]){
            return false;
        }
    }
    return true;
}
const str = "hello";
const search = "lo";
console.log(myEndsWith(str, search));