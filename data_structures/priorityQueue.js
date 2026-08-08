class PriorityQueue {
   #heap;
   #cmp;
   
   constructor(cmp = (a, b) => a - b) {
      this.#heap = [];
      this.#cmp = cmp;
   }

 //---implementation---

   #parent(index) {
      return Math.floor((index - 1) / 2);
   }

   #left(index) {
      return index * 2 + 1;
   }

   #right(index) {
      return index * 2 + 2;
   }

   #shiftUp(index) {
      while (index > 0) {
         const parent = this.#parent(index);
         if (this.#cmp(this.#heap[parent], this.#heap[index]) <= 0) {
            break;
         }
         [this.#heap[parent], this.#heap[index]] = [this.#heap[index], this.#heap[parent]];
         index = parent;
      }
   }

   #shiftDown(index) {
      while (true) {
         const left = this.#left(index);
         const right = this.#right(index);
         if (left >= this.#heap.length) {
            break;
         }
         let child = left;
         if (right < this.#heap.length && this.#cmp(this.#heap[right], this.#heap[left]) < 0) {
            child = right;
         }
         if (this.#cmp(this.#heap[index], this.#heap[child]) <= 0) {
            break;
         }
         [this.#heap[index], this.#heap[child]] = [this.#heap[child], this.#heap[index]];
         index = child;
      }
   }

 //---interface---

   size() {
      return this.#heap.length;
   }

   isEmpty() {
      return this.size() === 0;
   }

   clear() {
      this.#heap = [];
   }

   peek() {
      return this.#heap[0];
   }

   pop() {
      if (this.isEmpty()) return undefined;
      const res = this.peek();
      if (this.size() === 1) {
         this.clear();
         return res;
      }
      this.#heap[0] = this.#heap.pop();
      this.#shiftDown(0);
      return res;
   }

   push(value) {
      this.#heap.push(value);
      this.#shiftUp(this.#heap.length - 1);
   }
}


const pq = new PriorityQueue((a, b) => b - a);
const pq1 = new PriorityQueue((a, b) => a - b);

pq.push(5);
pq.push(2);
pq.push(8);
console.log(pq.pop()); // 8
console.log(pq.pop()); // 5
console.log(pq.pop()); // 2

pq1.push(7);
pq1.push(2);
pq1.push(9);
console.log(pq1.pop()); // 2
console.log(pq1.pop()); // 7
console.log(pq1.pop()); // 9

