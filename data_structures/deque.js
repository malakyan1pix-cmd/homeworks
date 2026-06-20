class BucketedDeque {
    #everyBucketsLength;
    #bucketSize;
    #buckets;
    #frontBucket;
    #backBucket;
    #frontIndex;
    #backIndex;
    #size;

    constructor(everyBucketsLength = 8) {
        if(!Number.isInteger(everyBucketsLength) || everyBucketsLength <= 0){
            throw new Error("Invalid bucket size");
        }
        this.#everyBucketsLength = everyBucketsLength;
        this.#bucketSize = 4;
        this.#size = 0;
        this.#buckets = new Array(this.#bucketSize);
        for(let i = 0; i < this.#bucketSize; ++i){
            this.#buckets[i] = new Array(this.#everyBucketsLength);
        }
        
        let mid = Math.floor(this.#bucketSize / 2);
        this.#frontBucket = mid - 1;
        this.#backBucket = mid;

        this.#frontIndex = this.#everyBucketsLength - 1;
        this.#backIndex = 0;
    }

    push_front(value) {
        if(this.#frontIndex < 0){
            this.#frontIndex = this.#everyBucketsLength - 1;
            --this.#frontBucket;
            if(this.#frontBucket < 0){
                this._ensureBucket(true);
            }
        }
        this.#buckets[this.#frontBucket][this.#frontIndex--] = value;
        ++this.#size; 
    }

    push_back(value) {
        if(this.#backIndex >= this.#everyBucketsLength){
            this.#backIndex = 0;
            ++this.#backBucket;
            if(this.#backBucket >= this.#bucketSize){
                this._ensureBucket(false);
            }
        }
        this.#buckets[this.#backBucket][this.#backIndex++] = value;
        ++this.#size;
    }

    pop_front() {
        if(this.isEmpty()) throw new Error("Is empty");

        ++this.#frontIndex;
        if(this.#frontIndex >= this.#everyBucketsLength){
            this.#frontIndex = 0;
            ++this.#frontBucket;
        }

        const res = this.#buckets[this.#frontBucket][this.#frontIndex];
        --this.#size;
        return res;
    }

    pop_back() {
        if(this.isEmpty()) throw new Error("Is empty");

        --this.#backIndex;
        if(this.#backIndex < 0){
            this.#backIndex = this.#everyBucketsLength - 1;
            --this.#backBucket;
        }

        const res = this.#buckets[this.#backBucket][this.#backIndex];
        --this.#size;
        return res;
    }

    front() {
        return this.#size ? this.at(0) : undefined;
    }

    back() {
        return this.#size ? this.at(this.#size - 1) : undefined;
    }

    clear() {
        this.#everyBucketsLength = 8;
        this.#bucketSize = 4;
        this.#size = 0;
        this.#buckets = new Array(this.#bucketSize);
        for(let i = 0; i < this.#bucketSize; ++i){
            this.#buckets[i] = new Array(this.#everyBucketsLength);
        }
        
        let mid = Math.floor(this.#bucketSize / 2);
        this.#frontBucket = mid - 1;
        this.#backBucket = mid;

        this.#frontIndex = this.#everyBucketsLength - 1;
        this.#backIndex = 0;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    toArray() {
        let arr = [];
        for(let i = 0; i < this.#size; ++i){
            arr.push(this.at(i));
        }
        return arr;
    } 

    at(globalIndex) {
        let { localIdx, buckIdx } = this._bucketIndex(globalIndex);
        return this.#buckets[buckIdx][localIdx];
    }

    *[Symbol.iterator]() {
        for(let i = 0; i < this.#size; ++i){
            yield this.at(i);
        }
    }

    _ensureBucket(front = false) {
        const newSize = this.#bucketSize * 2;
        const newBuckets = new Array(newSize);
        const shift = this.#bucketSize;

        if(front){
            for(let i = 0; i < this.#bucketSize; ++i){
                newBuckets[i] = new Array(this.#everyBucketsLength);
            }
            for(let i = 0; i < this.#bucketSize; ++i){
                newBuckets[i + shift] = this.#buckets[i];
            }
            this.#frontBucket += shift;
            this.#backBucket += shift;
        }
        else{
            for(let i = this.#bucketSize; i < newSize; ++i){
                newBuckets[i] = new Array(this.#everyBucketsLength);
            }
            for(let i = 0; i < this.#bucketSize; ++i){
                newBuckets[i] = this.#buckets[i];
            }
        }
        this.#buckets = newBuckets;
        this.#bucketSize = newSize;
    }

    _bucketIndex(globalIndex) {
        if(!Number.isInteger(globalIndex) || globalIndex < 0 || globalIndex >= this.#size ){
            return undefined;
        }

        const absIdx = (this.#frontIndex + 1) + globalIndex;
        const localIdx = absIdx % this.#everyBucketsLength;
        const buckIdx = this.#frontBucket + Math.floor(absIdx / this.#everyBucketsLength);

        return { buckIdx, localIdx };
    }

}