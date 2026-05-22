function insertionSortObjects(arr){
    for(let i = 1; i < arr.length; i++){

        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j].age > key.age){
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const arr = [
  { name: "Anna", age: 22 },
  { name: "John", age: 18 },
  { name: "Mike", age: 30 }
]

console.log(insertionSortObjects(arr));
