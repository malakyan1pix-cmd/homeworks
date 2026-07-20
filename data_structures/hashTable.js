import {Node, LinkedList} from "./linkedList.js";

class HashTable {
    #table;
    #capacity;
    #size;
    #loadFactor;

    constructor(capacity = 7, loadFactor = 1.0) {
        if (!Number.isInteger(capacity)) throw new Error("Capacity must be an integer.");
        if (capacity <= 0) throw new Error("Capacity must be positiv number.");
        if (loadFactor <= 0) throw new Error ("Load factor must be positive,");
        if (!this.#isPrime(capacity)) capacity = this.#PrimeNumber(capacity);
        this.#size = 0;
        this.#capacity = capacity;
        this.#loadFactor = loadFactor;
        this.#table = new Array(this.#capacity);

        for (let i = 0; i < this.#capacity; i++){
            this.#table[i] = new LinkedList();
        }
    }
    

    /* ================= Basic State ================= */

    size() {
        return this.#size;
    }

    capacity() {
        return this.#capacity;
    }

    isEmpty() {
        return this.#size === 0;
    }

    clear() {
        let tmp = [];
        for (let i = 0; i < this.#capacity; i++){
            tmp.push(new LinkedList());
        }

        this.#size = 0;
        this.#table = tmp;
    }

    /* ================= Hashing ================= */

    #hash(key) {
        let hash = 0;
        if (typeof key === "number") {
            key = Math.abs(key);
            while (key) {
                hash += key % 10;
                key /= 10;
                key = Math.floor(key);
            }
            return hash % this.#capacity; 
        }
        else if (typeof key === "string") {
            for (let i = 0; i < key.length; i++){
                hash += key.charCodeAt(i);
            }
            return hash % this.#capacity; 
        }
        else {
            throw new Error("Invalid Key!");
        }
    }
    

    /* ================= Core Operations ================= */

    put(key, value) {
        let index = this.#hash(key);
        let bucket = this.#table[index];

        if (bucket.containsKey(key)) {
            let curr = bucket.head;
            while (curr) {
                if (curr.key === key) {
                    curr.value = value;
                    return;
                }
                curr = curr.next;
            }
        }
        let newNode = new Node(key, value);
        newNode.next = bucket.head;
        bucket.head = newNode;
        this.#size++;
        bucket.size++;
        
        if (this.loadFactor() >= this.#loadFactor) {
            this.#resize(this.#capacity * 2);
        }
    }

    get(key) {
        let index = this.#hash(key);
        let bucket = this.#table[index];
        let curr = bucket.head;
        while (curr) {
            if (curr.key === key) {
                return curr.value;
            }
            curr = curr.next;
        }
        return undefined;
    }

    remove(key) {
        let index = this.#hash(key);
        let bucket = this.#table[index];
        let curr = bucket.head;
        let prev = null;
        let res = null;
        while (curr) {
            if (curr.key === key) {
                res = curr.value;
                if (prev === null) {
                    bucket.head = curr.next;
                }
                else {
                prev.next = curr.next;
                }
                this.#size--;
                bucket.size--;
                return res;
            }
            prev = curr;
            curr = curr.next;
        }
        return undefined;
    }

    containsKey(key) {
        let index = this.#hash(key);
        let bucket = this.#table[index];
        let curr = bucket.head;
        while (curr) {
            if (curr.key === key) return true;
            curr = curr.next;
        }
        return false;
    }

    containsValue(value) {
        for (let i = 0; i < this.#capacity; i++) {
            let bucket = this.#table[i];
            let curr = bucket.head;
            while (curr) {
                if (curr.value === value) return true;
                curr = curr.next;
            }
        }
        return false;
    }

    /* ================= Resize / Rehash ================= */

    #resize(newCapacity) {
        let oldTable = this.#table;
        this.#table = [];
        this.#capacity = newCapacity;
        this.#size = 0;
        for (let i = 0; i < newCapacity; i++){
            this.#table.push(new LinkedList());
        }
        for (let bucket of oldTable) {
            let curr = bucket.head;
            while (curr) {
                this.put(curr.key, curr.value);
                curr = curr.next;
            }
        }
    }
    

    loadFactor() {
        return this.#size / this.#capacity;
    }

    /* ================= Entry Views ================= */

    keys() {
        const res = [];
        for (let i = 0; i < this.#capacity; i++) {
            let bucket = this.#table[i];
            let curr = bucket.head;
            while (curr) {
                res.push(curr.key);
                curr = curr.next;
            }
        }
        return res;
    }

    values() {
        const res = [];
        for (let i = 0; i < this.#capacity; i++) {
            let bucket = this.#table[i];
            let curr = bucket.head;
            while (curr) {
                res.push(curr.value);
                curr = curr.next;
            }
        }
        return res;
    }

    entries() {
        const res = [];
        for (let i = 0; i < this.#capacity; i++) {
            let bucket = this.#table[i];
            let curr = bucket.head;
            while (curr) {
                res.push([curr.key ,curr.value]);
                curr = curr.next;
            }
        }
        return res;
    }

    /* ================= Iteration ================= */

    *[Symbol.iterator]() {
        for (let i = 0;i < this.#capacity; i++) {
            let bucket = this.#table[i];
            let curr = bucket.head;
            while (curr) {
                yield [curr.key, curr.value];
                curr = curr.next;
            }
        }
    }

    /* ================= Debug ================= */

    bucketSizes() {
        let res = [];
        for (let i = 0; i < this.#capacity; i++) {
            let bucket = this.#table[i];
            res.push(bucket.size());
        }
        return res;
    }

    print() {
        for (let i = 0; i < this.#capacity; i++) {
            let result = `Bucket ${i}: `;
            let current = this.#table[i].head;

            while (current) {
                result += `(${current.key}: ${current.value}) -> `;
                current = current.next;
            }

            result += "null";

            console.log(result);
        }
    }

    #isPrime (cap) {
        if (cap === 0 || cap === 1) return false;
        for (let i = 2; i <= Math.sqrt(cap); i++) {
            if (cap % i === 0) return false;
        }
        return true;
    }

    #PrimeNumber (cap) {
        while(!(this.#isPrime(cap))) {
            cap++;
        }
        return cap;
    }
}