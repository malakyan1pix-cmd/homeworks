class Node{
    #next;
    #prev;
    constructor(value, next = null, prev = null){
        this.value = value;
        this.#next = next;
        this.#prev = prev;
    }

    get next(){
        return this.#next;
    }

    set next(node){
        this.#next = node;
    }
    
    get prev(){
        return this.#prev;
    }

    set prev(node){
        this.#prev = node;
    }
}

class DoublyLinkedList{
    #head;
    #tail;
    constructor(value){
        if(value !== undefined){
            const node = new Node(value);
            this.#head = node;
            this.#tail = node;
        }
        else {
            this.#head = null;
            this.#tail = null;
        }
    }

    empty(){
        return this.#head === null;
    }

    size(){
        let curr = this.#head;
        let count = 0;

        while(curr){
            ++count;
            curr = curr.next;
        }
        return count;
    }

    clear(){
        this.#head = null;
        this.#tail = null;
    }

    front(){
        if(this.empty()) throw new Error("Is empty");
        return this.#head.value;
    }

    back(){
        if(this.empty()) throw new Error("Is empty");
        return this.#tail.value;
    }

    at(index){
        if(!Number.isInteger(index)) throw new Error("Index is not integer.");
        if(index < 0 || index >= this.size()) throw new Error("Invalid index.");

        let curr = this.#head;
        while(index--){
            curr = curr.next;
        }
        return curr.value;
    }

    pushFront(value){
        let node = new Node(value);

        if(this.empty()){
            this.#head = node;
            this.#tail = node;
            return;
        }

        node.next = this.#head;
        this.#head.prev = node;
        this.#head = node;
    }

    pushBack(value){
        let node = new Node(value);

        if(this.empty()){
            this.#head = node;
            this.#tail = node;
            return;
        }

        this.#tail.next = node;
        node.prev = this.#tail;
        this.#tail = node;
    }

    popFront(){
        if(this.empty()) throw new Error("Is empty");
        let res = this.#head.value;

        if(this.#head === this.#tail){
            this.#head = null;
            this.#tail = null;
            return res;
        }
        this.#head = this.#head.next;
        this.#head.prev = null;
        return res;
    }

    popBack(){
        if(this.empty()) throw new Error("Is empty");
        let res = this.#tail.value;

        if(this.#head === this.#tail){
            this.#head = null;
            this.#tail = null;
            return res;
        }

        this.#tail = this.#tail.prev;
        this.#tail.next = null;
        return res;
    }

    insert(index, value){
        if(!Number.isInteger(index)) throw new Error("Index is not integer.");
        let size = this.size();
        if(index < 0 || index > size) throw new Error("Invalid index.");

        if(index === 0){
            this.pushFront(value);
            return;
        }
        if(index === size){
            this.pushBack(value);
            return;
        }

        let curr = this.#head;
        for(let i = 0; i < index; i++){
            curr = curr.next;
        }
        let node = new Node(value);

        node.prev = curr.prev;
        node.next = curr;

        curr.prev.next = node;
        curr.prev = node;
    }

    erase(index){
        if(!Number.isInteger(index)) throw new Error("Index is not integer.");
        let size = this.size();
        if(index < 0 || index >= size) throw new Error("Invalid index.");

        if(index === 0){
            return this.popFront();
        }
        if(index === size - 1){
            return this.popBack();
        }

        let curr = this.#head;
        for(let i = 0; i < index; i++){
            curr = curr.next;
        }
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;

        return curr.value;
    }

    find(value){
        if(this.empty()) return -1;
        let curr = this.#head;
        let idx = 0;
        while(curr){
            if(curr.value === value){
                return idx;
            }
            idx++;
            curr = curr.next;
        }
        return -1;
    }

    contains(value){
        return this.find(value) !== -1;
    }

    toArray(){
        if(this.empty()) return [];
        let arr = [];
        let curr = this.#head;

        while(curr){
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }

    reverse(){
        let curr = this.#head;

        while(curr){
            let tmp = curr.next;
            curr.next = curr.prev;
            curr.prev = tmp;
            curr = tmp;
        }

        let tmp = this.#head;
        this.#head = this.#tail;
        this.#tail = tmp;
    }

    *[Symbol.iterator](){
        let curr = this.#head;

        while(curr){
            yield curr.value;
            curr = curr.next;
        }
    }

    *reverseIterator(){
        let curr = this.#tail;

        while(curr){
            yield curr.value;
            curr = curr.prev;
        }
    }

    *entries(){
        let curr = this.#head;
        let idx = 0

        while(curr){
            yield [idx, curr.value];
            curr = curr.next;
            idx++;
        }
    }
}

const list = new DoublyLinkedList();


list.pushBack(10);

list.pushBack(20);

list.pushBack(30);


list.insert(1, 15);


console.log(list.toArray());

// [10, 15, 20, 30]


list.erase(2);


console.log(list.toArray());

// [10, 15, 30]


list.reverse();


console.log(list.toArray());

// [30, 15, 10]


console.log(list.front());

// 30


console.log(list.back());

// 10