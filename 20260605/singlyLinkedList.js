class Node{
    #next;
    constructor(value, next = null){
        this.value = value;
        this.#next = next;
    }

    get next(){
        return this.#next;
    }

    set next(node){
        this.#next = node;
    }
}

class SinglyLinkedList{
    #head;
    constructor(value){
        if(value !== undefined){
            const node = new Node(value);
            this.#head = node;
            this.#head.next = null;
        }
        else {
            this.#head = null;
        }
    }

    empty(){
        return this.#head === null;
    }

    size(){
        if(this.empty()) return 0;
        if(this.#head.next === null) return 1;

        let count = 0;
        let curr = this.#head;

        while(curr){
            curr = curr.next;
            count++;
        }
        return count;
    }

    clear(){
        this.#head = null;
    }

    front(){
        if(this.empty()) throw new Error("Is empty");
        return this.#head.value;
    }

    back(){
        if(this.empty()) throw new Error("Is empty");

        let curr = this.#head;
        while(curr.next){
            curr = curr.next;
        }
        return curr.value;
    }

    at(index){
        if(this.empty()) throw new Error("Is empty");
        if(!Number.isInteger(index)) throw new Error("Index is not integer.");
        if(index < 0 || index >= this.size()) throw new Error ("Invalid index.");

        let curr = this.#head;
        while(index){
            --index;
            curr = curr.next;
        }
        return curr.value;
    }

    pushFront(value){
        if(this.empty()){
            this.#head = new Node(value);
            return;
        }
        let node = new Node(value);
        node.next = this.#head;
        this.#head = node;
    }

    pushBack(value){
        if(this.empty()){
            this.#head = new Node(value);
            return;
        }
        if(this.#head.next === null){
            this.#head.next = new Node(value);
            return;
        }

        let curr = this.#head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = new Node(value);
    }

    popFront(){
        if (this.empty()) throw new Error("Is empty.");
        let res = this.#head.value;
        this.#head = this.#head.next;
        return res;
    }

    popBack(){
        if(this.empty()) throw new Error("Is empty.");
        if(this.#head.next === null){
            let res = this.#head.value;
            this.#head = null;
            return res;
        }

        let curr = this.#head;
        while(curr.next.next){
            curr = curr.next;
        }
        let res = curr.next.value;
        curr.next = null;
        return res;
    }

    insert(index, value){
        if(!Number.isInteger(index)) throw new Error("Index is not integer.");
        if(index < 0 || index > this.size()) throw new Error("Invalid index.");

        if(index === 0){
            this.pushFront(value);
            return;
        }
        let curr = this.#head;
        while(index > 1){
            curr = curr.next;
            --index;
        }
        
        let node = new Node(value);
        node.next = curr.next;
        curr.next = node;
    }

    erase(index){
        if(this.empty()) throw new Error("Is empty");
        if(!Number.isInteger(index)) throw new Error("Index is not integer.");
        if(index < 0 || index >= this.size()) throw new Error("Invalid index.");

        if(index === 0){
            return this.popFront();
            
        }

        let curr = this.#head;
        while (index > 1) {
            curr = curr.next;
            --index;
        }
        let res = curr.next.value;
        curr.next = curr.next.next;
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
            idx++;
            curr = curr.next;
        }while(curr !== null);
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
        }while(curr !== null);
        return false;
    }

    toArray(){
        if(this.empty()) return [];
        let arr = new Array(this.size());
        let curr = this.#head;
        let i = 0;

        while(curr){
            arr[i++] = curr.value;
            curr = curr.next;
        }
        return arr;
    }

    reverse(){
        let prev = null;
        let curr = this.#head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.#head = prev;
    }

    *[Symbol.iterator](){
        if(this.empty()) return;
        let curr = this.#head;

        do{
            yield curr.value;
            curr = curr.next;
        }while(curr !== null);
    }

    *entries(){
        if(this.empty()) return;

        let curr = this.#head;
        let idx = 0; 

        do{
            yield [idx, curr.value];
            ++idx;
            curr = curr.next;
        }while(curr !== null);
    }
}

const list = new SinglyLinkedList();


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