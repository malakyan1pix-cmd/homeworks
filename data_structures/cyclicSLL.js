class Node{
    value;
    next;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class CyclicSinglyLinkedList{
    #head;
    constructor(value){
        if(value !== undefined){
            const node = new Node(value);
            this.#head = node;
            this.#head.next = this.#head;
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
        let curr = this.#head; 
        let count = 0;
        do{
            ++count;
            curr = curr.next;
        }while(curr !== this.#head)
        return count;
    }

    clear(){
        this.#head = null;
    }

    front(){
        if(this.empty()) throw new Error("List is Empty");
        return this.#head.value;
    }
    back(){
        if(this.empty()) throw new Error("List is Empty");
        let curr = this.#head;
        while(curr.next !== this.#head){
            curr = curr.next;
        }
        return curr.value;
    }

    at(index){
        if(this.empty()) throw new Error("Is empty");
        if(!Number.isInteger(index)) throw new Error("Index must by en Integer");
        if(index < 0 || index >= this.size()) throw new Error("Invalid index.");
        
        let curr = this.#head;
        while(index){
            --index
            curr = curr.next;
        }
        return curr.value;
    }

    pushFront(value){
        if(this.empty()){
            this.#head = new Node(value);
            this.#head.next = this.#head;
            return;
        }

        let curr = this.#head;
        while(curr.next !== this.#head){
            curr = curr.next;
        }
        let node = new Node(value);
        node.next = this.#head;
        curr.next = node;
        this.#head = node;
    }

    pushBack(value){
        if(this.empty()){
            this.#head = new Node(value);
            this.#head.next = this.#head;
            return;
        }

        let curr = this.#head;
        while(curr.next !== this.#head){
            curr = curr.next;
        }
        let node = new Node(value);
        curr.next = node;
        node.next = this.#head;
    }

    popFront(){
        if(this.empty()) throw new Error("Is empty.");
        if(this.#head.next === this.#head){
            let res = this.#head.value;
            this.#head = null;
            return res;
        }
        let res = this.#head.value;
         let curr = this.#head;
         while(curr.next !== this.#head){
            curr = curr.next;
         }
         this.#head = this.#head.next;
         curr.next = this.#head;
         return res;
    }

    popBack(){
        if(this.empty()) throw new Error("Is empty.");
        if(this.#head.next === this.#head){
            let res = this.#head.value;
            this.#head = null;
            return res;
        }
        let curr = this.#head;
        while(curr.next.next !== this.#head){
            curr = curr.next;
        }
        let res = curr.next.value;
        curr.next = this.#head;
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

        while(--index > 0){
            curr = curr.next;
        }

        let node = new Node(value);
        node.next = curr.next;
        curr.next = node;
    }

    erase(index){
        if(this.empty()) throw new Error("Is empty");
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
        while(--index > 0){
            curr = curr.next;
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
        let arr = new Array(this.size());
        let curr = this.#head;
        let i = 0;

        do{
            arr[i++] = curr.value;
            curr = curr.next;
        }while(curr !== this.#head)
        return arr;
    }

    reverse(){
        if(this.empty() || this.#head.next === this.#head) return;

        let prev = this.#head;
        let curr = this.#head.next;
        const start = this.#head;
        do{
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }while(curr !== start);
        this.#head.next = prev;
        this.#head = prev;
    }

    *[Symbol.iterator](){
        if(this.empty()) return;
        let curr = this.#head;

        do{
            yield curr.value;
            curr = curr.next;
        }while(curr !== this.#head);
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

const list = new CyclicSinglyLinkedList();

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