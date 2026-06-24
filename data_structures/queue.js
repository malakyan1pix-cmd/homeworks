import { BucketedDeque } from "./deque.js"
class Queue {
  #data;
  #size;

  constructor(capacity = 16) {
    this.#data = new BucketedDeque(capacity);
    this.#size = 0;
  }

  enqueue(value) {
    this.#data.push_back(value);
    this.#size++;
  }

  dequeue() {
    if(this.isEmpty()) throw new Error("Queue is empty.");
    this.#size--;
    return this.#data.pop_front();
  }

  front() {
    if(this.isEmpty()) throw new Error("Queue is empty.");
    return this.#data.front();
  }

  back() {
    if(this.isEmpty()) throw new Error("Queue is empty");
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
    return this.#data.toArray();
  }

  [Symbol.iterator]() {
    return this.#data[Symbol.iterator]();
  }
}