class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CyclicDoublyLinkedList{
    #head;
    #tail;
    constructor(value){
        if(value !== undefined){
            let node = new Node(value);
            node.next = node;
            node.prev = node;
            this.#head = node;
            this.#tail = node;
        }
        else{
            this.#head = null;
            this.#tail = null;
        }
    }

    empty(){
        return this.#head === null;
    }

    size(){
        if(this.empty()) return 0;

        let curr = this.#head; 
        let count = 0;

        do{
            ++count;
            curr = curr.next;
        }while(curr !== this.#head);
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
        if(this.empty()) throw new Error("Is empty");
        if(!Number.isInteger(index)) throw new Error("Index is not integer");
        if(index < 0 || index >= this.size()) throw new Error("Invalid index");

        let curr = this.#head;
        while(index){
            index--;
            curr = curr.next;
        }
        return curr.value;
    }

    pushFront(value){
        if(this.empty()){
            let node = new Node(value);
            this.#head = node;
            this.#tail = node;
            node.next = node;
            node.prev = node;
            return;
        }

        let node = new Node(value);
        node.next = this.#head;
        node.prev = this.#tail;
        this.#head.prev = node;
        this.#tail.next = node;
        this.#head = node;

    }

    pushBack(value){
        if(this.empty()){
            let node = new Node(value);
            this.#head = node;
            this.#tail = node;
            node.next = node;
            node.prev = node;
            return;
        }

        let node = new Node(value);
        node.prev = this.#tail;
        node.next = this.#head;
        this.#head.prev = node;
        this.#tail.next = node;
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
        this.#tail.next = this.#head;
        this.#head.prev = this.#tail;
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
        this.#head.prev = this.#tail;
        this.#tail.next = this.#head;
        return res;
    }

    insert(index, value){
        if(!Number.isInteger(index)) throw new Error("Index is not integer");
        let size = this.size();
        if(index < 0 || index > size) throw new Error("Invalid index");

        if(index === 0){
            this.pushFront(value);
            return;
        }

        if(index === size){
            this.pushBack(value);
            return;
        }

        let node = new Node(value);
        let curr = this.#head;
        while(index){
            --index;
            curr = curr.next;
        }
        node.prev = curr.prev;
        node.next = curr;
        curr.prev.next = node;
        curr.prev = node;
    }

    erase(index){
        if(this.empty()) throw new Error("Is empty");
        let size = this.size();
        if(!Number.isInteger(index)) throw new Error("Index is not integer");
        if(index < 0 || index >= size) throw new Error("Invalid index");

        if(index === 0){
            return this.popFront();
        }
        if(index === size - 1){
            return this.popBack();
        }
        let curr = this.#head;
        while(index){
            --index;
            curr = curr.next;
        }
        let res = curr.value;
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        return res;
    }

    find(value){
        if(this.empty()) return -1;
        let curr = this.#head;
        let idx = 0;
        do{
            if(curr.value === value){
                return idx;
            }
            ++idx;
            curr = curr.next;
        }while(curr !== this.#head);
        return -1;
    }

    contains(value){
        if(this.empty()) return false;
        let curr = this.#head;
        do{
            if(curr.value === value){
                return true;
            }
            curr = curr.next;
        }while(curr !== this.#head);
        return false;
    }

    toArray(){
        if(this.empty()) return [];
        let res = [];
        let curr = this.#head;
        do{
            res.push(curr.value);
            curr = curr.next;
        }while(curr !== this.#head);
        return res;
    }

    reverse(){
        if(this.empty() || this.#head === this.#tail) return;
        let curr = this.#head;
        let head = this.#head;

        do{
            let tmp = curr.next;
            curr.next = curr.prev;
            curr.prev = tmp;
            curr = tmp;
        }while(curr !== head);

        let tmp = this.#head;
        this.#head = this.#tail;
        this.#tail = tmp;
    }

    *[Symbol.iterator](){
        if(this.empty()) return;
        let curr = this.#head;
        do{
            yield curr.value;
            curr = curr.next;
        }while(curr !== this.#head);
    }

    *reverseIterator(){
        if(this.empty()) return;
        let curr = this.#tail;
        do{
            yield curr.value;
            curr = curr.prev;
        }while(curr !== this.#tail);
    }

    *entries(){
        if(this.empty()) return;
        let curr = this.#head;
        let idx = 0;
        do{
            yield [idx, curr.value];
            ++idx;
            curr = curr.next;
        }while(curr !== this.#head);
    }
}

const list = new CyclicDoublyLinkedList();


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
