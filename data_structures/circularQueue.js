import { DynamicArray } from "./dynamicArray.js";

class CircularQueue {
    #data;
    #front;
    #size;
    constructor(capacity = 8) {
        if(!Number.isInteger(capacity)) throw new Error("Capacity must be an Integer.");
        if(capacity <= 0) throw new Error("Capacity mush be positiv number.");

        this.#data = new DynamicArray(capacity);
        this.#front = 0;
        this.#size = 0;
    }
    
    size() {
        return this.#size;
    }

    capacity() {
        return this.#data.capacity();
    }

    isEmpty() {
        return this.#size === 0;
    }

    clear() {
        this.#data = new DynamicArray(this.#data.capacity());
        this.#size = 0;
        this.#front = 0;
    }
    
    enqueue(value) {
        if(this.#size === this.#data.capacity()){
            this.#grow();
        }
        
        const idx = (this.#size + this.#front) % this.#data.capacity();
        this.#data[idx] = value;
        this.#size++;
    }
    
    dequeue() {
        if(this.isEmpty()) throw new Error("Queue is empty.");
        const value = this.#data[this.#front];
        
        this.#data[this.#front] = undefined;
        this.#front = (this.#front + 1) % this.#data.capacity();
        
        this.#size--;
        return value;
    }
    
    front() {
        if(this.isEmpty()) throw new Error("Queue is empty.");
        return this.#data[this.#front];
    }
    
    back() {
        if(this.isEmpty()) throw new Error("Queue is empty.");
        
        const idx = (this.#front + this.#size - 1) % this.#data.capacity();
        return this.#data[idx];
    }
    
    #grow() {
        const newSize = this.#data.capacity() * 2;
        const newData = new DynamicArray(newSize);
        
        for(let i = 0; i < this.#size; i++){
            let idx = (this.#front + i) % this.#data.capacity();
            newData[i] = this.#data[idx];
        }
        
        this.#data = newData;
        this.#front = 0;
    }
    
    toArray() {
        const arr = [];
        for(let i = 0; i < this.#size; i++){
            let idx = (this.#front + i) % this.#data.capacity();
            arr.push(this.#data[idx]);
        }
        return arr;
    }
    
    toString() {
        return `${this.toArray()}`;
    }
    
    *[Symbol.iterator]() {
        for(let i = 0; i < this.#size; i++){
            yield this.#data[(this.#front + i) % this.#data.capacity()];
        }
    }
}