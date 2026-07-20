import { BucketedDeque } from "./deque.js"
class Stack {
  #data;
  #size;

  constructor(initialCapacity = 16) {
    this.#data = new BucketedDeque(initialCapacity);
    this.#size = 0;
  }

  push(value) {
    this.#data.push_back(value);
    this.#size++;
  }

  pop() {
    if(this.isEmpty()) throw new Error("Stack is empty");
    this.#size--;
    return this.#data.pop_back();
  }

  peek() {
    if(this.isEmpty()) throw new Error("Stack is empty");
    return this.#data.back();
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#data.clear();
    this.#size = 0;
  }

  toArray() {
    const arr = this.#data.toArray();
    const res = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      res.push(arr[i]);
    }
    return res;
  }


  *[Symbol.iterator]() {
    const arr = this.#data.toArray();

    for (let i = arr.length - 1; i >= 0; --i) {
      yield arr[i];
    }
  }
}