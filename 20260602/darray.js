class DynamicArray{
    #arr;
    #size;
    #capacity;
    #CAP_EXPONENT;
    constructor(initialCapacity){
        if(!Number.isInteger(initialCapacity)) throw new Error("Capacity must be an integer");
        if(initialCapacity <= 0) throw new Error("Capacity must be positiv number.");
        this.#capacity = initialCapacity;
        this.#size = 0;
        this.#CAP_EXPONENT = 2;
        this.#arr = new Uint32Array(initialCapacity);
    }

    #resize(newCapacity, fill = 0){
        if(newCapacity < 0) throw new Error("Capasity must be positiv numder");
        if(!Number.isInteger(newCapacity)) throw new Error("Capasity must be an Integer");
        if(newCapacity < this.#size) this.#size = newCapacity;
        
        let newArr = new Uint32Array(newCapacity);
        for(let i = 0; i < this.#size; ++i){
            newArr[i] = this.#arr[i]; 
        }
        for(let i = this.#size; i < newCapacity; ++i){
            newArr[i] = fill;
        }
        this.#arr = newArr;
        this.#capacity = newCapacity;
    }

    pushBack(elem){
        if (!Number.isInteger(elem)) throw new Error("Value must be an integer.");
        if(this.#size === this.#capacity){
            let newCap = this.#capacity * this.#CAP_EXPONENT;
            this.#resize(newCap);
        }
        this.#arr[this.#size++] = elem;
    }

    popBack(){
        if(this.#size == 0) return;
        this.#size--;
    }

    erase(index){
        if(!Number.isInteger(index)) throw new Error("Index must be an integer.");
        if(index < 0 || index >= this.#size) throw new Error("Index Error: Out of range.");
        for(let i = index; i < this.#size - 1; ++i){
            this.#arr[i] = this.#arr[i + 1]; 
        }
        this.#size--;
    }

    at(index){
        if(!Number.isInteger(index)) throw new Error("Index must be an integer.");
        if(index < 0 || index >= this.#size) throw new Error("Index Error: Out of range.");
        return this.#arr[index];
    }

    empty(){
        return this.#size === 0;
    }

    clear(){
        this.#size = 0;
    }

    setValue(i, value){
        if (!Number.isInteger(i)) throw new Error("Index must be an integer.");
        if (i < 0 || i >= this.#size) throw new Error("Index Error: Out of range.");
        if (!Number.isInteger(value)) throw new Error("Value must be an integer.");
        this.#arr[i] = value;
    }

    front(){
        if(this.empty()) return undefined;
        return this.#arr[0];
    }

    back(){
        if(this.empty()) return undefined;
        return this.#arr[this.#size - 1];
    }

    capacity(){
        return this.#capacity;
    }

    [Symbol.iterator]() {
        let i = 0;
        return {
            next : () => {
                if (i >= this.#size) {
                    return {value: undefined, done: true};
                }
                return {value: this.#arr[i++], done: false};
            },
        };
    }

    reserve(n){
        if(!Number.isInteger(n)) throw new Error("Number must be an integer.");
        if(n > 0) throw new Error("Number must by positive");
        if(n > this.#capacity){
            this.#resize(n);
        }
    }

    shrinkToFit(){
        this.#resize(this.#size);
    }

    toArray(){
        let newArr = new Array(this.#size);
        for(let i = 0; i < this.#size; ++i){
            newArr[i] = this.#arr[i];   
        }
        return newArr;
    }

    insert(pos, value){
        
        if (!Number.isInteger(pos)) throw new Error("Index must be an integer.");
        if (pos < 0 || pos > this.#size) throw new Error("Index Error: Out of range.");
        if (!Number.isInteger(value)) throw new Error("Value must be an integer.");
        if(this.#size === this.#capacity){
            let newCap = this.#capacity * this.#CAP_EXPONENT;
            this.#resize(newCap);
        }
        for(let i = this.#size; i > pos; --i){
            this.#arr[i] = this.#arr[i - 1];
        }
        this.#arr[pos] = value;
        ++this.#size;
    }

    swap(i, j) {
        if (!Number.isInteger(i)) throw new Error("Index must be an integer.");
        if (i < 0 || i >= this.#size) throw new Error("Index Error: Out of range.");
        if (!Number.isInteger(j)) throw new Error("Index must be an integer.");
        if (j < 0 || j >= this.#size) throw new Error("Index Error: Out of range.");
        [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
    }

    values() {
        return this[Symbol.iterator]();
    }

    keys() {
        let i = 0;
        return{
            next : () => {
                if(i >= this.#size){
                    return {value: undefined, done: true};
                }
                return {value: i++, done: false};
            },
        };
    }

    entries() {
        let i = 0;
        return{
            next : () => {
                if(i >= this.#size){
                    return {value: undefined, done: true};
                }
                return {value: [i, this.#arr[i++]], done: false};
            },
        };
    }

    forEach(callback, thisArg) {
        if(typeof callback !== "function") throw new Error("Callback must be an function");
        for(let i = 0; i < this.#size; ++i){
            callback.call(thisArg, this.#arr[i], i, this);
        }
    }

    map(callback, thisArg) {
        if(typeof callback !== "function") throw new Error("Callback must be an function");
        let DArray = new DynamicArray(this.#capacity);
        for(let i = 0; i < this.#size; ++i){
            DArray.pushBack((callback.call(thisArg, this.#arr[i], i, this)));
        }
        return DArray;
    }

    filter(callback, thisArg) {
        if(typeof callback !== "function") throw new Error("Callback must be an function");
        let DArray = new DynamicArray(this.#capacity);
        for(let i = 0; i < this.#size; ++i){
            if(callback.call(thisArg, this.#arr[i], i, this)){
                DArray.pushBack(this.#arr[i]);
            }
        }
        return DArray;
    }

    reduce(callback, initialValue) { 
        if (typeof callback !== "function") throw new Error("Callback must be a function");
        if(this.#size === 0 && initialValue === undefined) throw new Error("Reduce of empty array");
        let acc;
        let start;
        if (initialValue !== undefined) {
            acc = initialValue;
            start = 0;
        }
        else {
            acc = this.#arr[0];
            start = 1;
        }
        for (let i = start; i < this.#size; ++i) {
            acc = callback(acc, this.#arr[i], i, this);
        }
        return acc;
    }

    some(callback, thisArg) {
        if(typeof callback !== "function") throw new Error("Callback must be an function");
        for(let i = 0; i < this.#size; ++i){
            if(callback.call(thisArg, this.#arr[i], i, this)){
                return true;
            }
        }
        return false;
    }

    every(callback, thisArg) {
        if(typeof callback !== "function") throw new Error("Callback must be an function");
        for(let i = 0; i < this.#size; ++i){
            if(!(callback.call(thisArg, this.#arr[i], i, this))){
                return false;
            }
        }
        return true;
    }

    find(callback, thisArg) {
        if(typeof callback !== "function") throw new Error("Callback must be an function");
        for(let i = 0; i < this.#size; ++i){
            if(callback.call(thisArg, this.#arr[i], i, this)){
                return this.at(i);
            }
        }
        return undefined;
    }

    findIndex(callback, thisArg) {
        if(typeof callback !== "function") throw new Error("Callback must be an function");
        for(let i = 0; i < this.#size; ++i){
            if(callback.call(thisArg, this.#arr[i], i, this)){
                return i;
            }
        }
        return -1;
    }

    includes(value) {
        for(let i = 0; i < this.#size; ++i){
            if(this.at(i) === value){
                return true;
            }
        }
        return false;
    }
}
