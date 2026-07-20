import { Queue } from "./queue.js";

class Node {
    value;
    left = null;
    right = null;
    height = 1;

    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    #root;
    #size = 0;

    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    /* ================= Basic State ================= */

    size() {
        return this.#size;
    }

    is_empty() {
        return this.#root === null;
    }

    clear() {
        this.#root = null;
        this.#size = 0;
    }

    /* ================= AVL Balancing ================= */

    #insert(node, value) {
        if (!node) {
            ++this.#size;
            return new Node(value);
        }
        if (node.value < value) {
            node.right = this.#insert(node.right, value);
        } 
        else if (node.value > value) {
            node.left = this.#insert(node.left, value);
        } 
        else {
            return node;
        }
        node.height = this.#getHeight(node);
        return this.#reBalance(node);
    }

    #delete(node, value) {
        if (!node) return null;
        if (node.value > value) {
            node.left = this.#delete(node.left, value);
        }
        else if (node.value < value) {
            node.right = this.#delete(node.right, value);
        }
        else {
            if (!node.left && !node.right) {
                this.#size--;
                return null;
            }
            else if (!node.left) {
                this.#size--;
                return node.right;
            }
            else if (!node.right) {
                this.#size--;
                return node.left;
            }
            else {
                let tmp = this.#getMin(node.right);
                node.value = tmp.value;
                node.right = this.#delete(node.right, tmp.value);
            }
        }
        node.height = this.#getHeight(node);
        return this.#reBalance(node);
    }

    #reBalance(node) {
        const balance = this.#balanceFactor(node);
        if (balance > 1) {
            if (this.#balanceFactor(node.left) >= 0) {
                return this.#rotateRight(node);
            } else {
                node.left = this.#rotateLeft(node.left);
                return this.#rotateRight(node);
            }
        } else if (balance < -1) {
            if (this.#balanceFactor(node.right) <= 0) {
                return this.#rotateLeft(node);
            } else {
                node.right = this.#rotateRight(node.right);
                return this.#rotateLeft(node);
            }
        } else {    
            return node;
        }
    }

    #balanceFactor(node) {
        if (!node) return 0;
        return this.#getHeight(node.left) - this.#getHeight(node.right);
    }

    #rotateLeft(node) {
        let tmp = node;
        let right_child = tmp.right;
        let left_right_child = right_child.left;
        right_child.left = tmp;
        tmp.right = left_right_child;
        tmp.height = this.#getHeight(tmp);
        right_child.height = this.#getHeight(right_child);
        return right_child;
    }

    #rotateRight(node) {
        let tmp = node;
        let left_child= tmp.left;
        let right_left_child = left_child.right;
        tmp.left = right_left_child;
        left_child.right = tmp;
        tmp.height = this.#getHeight(tmp);
        left_child.height = this.#getHeight(left_child);
        return left_child;
    }

    #getHeight(node) {
        if (!node) return 0;
        const leftHeight = node.left ? node.left.height : 0;
        const rightHeight = node.right ? node.right.height: 0;
        return 1 + Math.max(leftHeight, rightHeight);
    }

    /* ================= Core AVL Operations ================= */

    insert(value) {
        this.#root = this.#insert(this.#root, value);
    }

    delete(value) {
        this.#root = this.#delete(this.#root, value);
    }

    search(value) {
        return this.#search(this.#root, value);
    }

    /* ================= Height / Min / Max ================= */

    getHeight() {
        return this.#getHeight(this.#root);
    }

    getMin() {
        const node = this.#getMin(this.#root);
        return node ? node.value : undefined;
    }

    getMax() {
        const node = this.#getMax(this.#root);
        return node ? node.value : undefined;
    }

    /* ================= Traversals ================= */

    levelOrder() {
        const res = [];
        if (!this.#root) return res;
        const queue = new Queue();
        queue.enqueue(this.#root);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            res.push(node.value);
            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
        }
        return res;
    }

    preorder_rec() {
        const res = [];
        return this.#preorder_rec(this.#root, res);
    }

    preorder_itr() {
        const res = [];
        if (!this.#root) return res;
        const stack = [this.#root];
        while (stack.length) {
            const node = stack.pop();
            res.push(node.value);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        } 
        return res;
    }

    inorder_rec() {
        const res = [];
        return this.#inorder_rec(this.#root, res);
    }

    inorder_itr() {
        const res = [];
        if (!this.#root) return res;
        const stack = [];
        let curr = this.#root;

        while (curr || stack.length) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            res.push(curr.value);
            curr = curr.right;
        }
        return res;
    }

    postorder_rec() {
        const res = [];
        return this.#postorder_rec(this.#root, res);
    }

    postorder_itr() {
        const res = [];
        if (!this.#root) return res;
        const stack1 = [this.#root];
        const stack2 = [];
        while (stack1.length) {
            const node = stack1.pop();
            stack2.push(node);
            if (node.right) {
                stack1.push(node.right);
            }
            if (node.left) {
                stack1.push(node.left);
            }
        }
        while (stack2.length) {
            res.push(stack2.pop().value);
        }
        return res;
    }

    /* ================= BST Helpers ================= */

    #getMin(node) {
        if (!node) return undefined;
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    #getMax(node) {
        if (!node) return undefined;
        while (node.right) {
            node = node.right;
        }
        return node;
    }

    #search(node, value) {
        if (!node) return false;
        if (node.value === value) return true;
        if (node.value > value) {
            return this.#search(node.left, value);
        }
        if (node.value < value) {
            return this.#search(node.right, value);
        }
    }

    /* ================= DFS Helpers ================= */

    #preorder_rec(node, res) {
        if (!node) return res;
        res.push(node.value);
        this.#preorder_rec(node.left, res);
        this.#preorder_rec(node.right, res);
        return res;
    }

    #inorder_rec(node, res) {
       if (!node) return res;
       this.#inorder_rec(node.left, res);
       res.push(node.value);
       this.#inorder_rec(node.right, res);
       return res;
    }

    #postorder_rec(node, res) {
        if (!node) return res;
        this.#postorder_rec(node.left, res);
        this.#postorder_rec(node.right, res);
        res.push(node.value);
        return res;
    }

    /* ================= Advanced AVL Utilities ================= */

    isBalanced() {
        return this.#isBalanced(this.#root);
    }

    validateBST() {
        return this.#validateBST(this.#root, -Infinity, Infinity);
    }

    findSuccessor(value) {
        let curr = this.#root;
        let successor = null;

        while(curr) {
            if (value < curr.value) {
                successor = curr;
                curr = curr.left;
            }
            else if (value > curr.value) {
                curr = curr.right;
            }
            else {
                if (curr.right) {
                    return this.#getMin(curr.right).value;
                }
                break;
            }
        }
        return successor ? successor.value : null;
    }

    findPredecessor(value) {
        let curr = this.#root;
        let predecessor = null;

        while(curr) {
            if (value > curr.value) {
                predecessor = curr;
                curr = curr.right;
            }
            else if (value < curr.value) {
                curr = curr.left;
            }
            else {
                if (curr.left) {
                    return this.#getMax(curr.left).value;
                }
                break;
            }
        }
        return predecessor ? predecessor.value : null;
    }

    toArray() {
        const res = [];
        this.#inorder_rec(this.#root, res);
        return res;
    }

    clone() {
        const copy = new AVL();
        copy.#root = this.#clone(this.#root);
        copy.#size = this.#size;
        return copy;
    }

    equals(otherTree) {
        if (!(otherTree instanceof AVL)) return false;
        return this.#equals(this.#root, otherTree.#root);
    }

    /* ================= Iteration ================= */

    *[Symbol.iterator]() {
        const res = [];
        this.#inorder_rec(this.#root, res);
        for (const value of res) {
            yield value;
        }
    }

    *values() {
        const res = [];
        this.#inorder_rec(this.#root, res);
        for (const value of res) {
            yield value;
        }
    }

    *entries() {
        const res = [];
        this.#inorder_rec(this.#root, res);
        for (let i = 0; i < res.length; i++) {
            yield [i, res[i]];
        }
    }

    //* ================= Helpers ================= */

    #isBalanced(node) {
        if (!node) return true;
        if (Math.abs(this.#balanceFactor(node)) > 1) return false;
        return (
            this.#isBalanced(node.left) &&
            this.#isBalanced(node.right)
        );
    }

    #validateBST(node, min, max) {
        if (!node) return true;

        if (node.value <= min || node.value >= max) return false;

        return (
        this.#validateBST(node.left, min, node.value) &&
        this.#validateBST(node.right, node.value, max)
        );
    }

    #clone(node) {
        if (!node) return null;
        const newNode = new Node(node.value);
        newNode.height = node.height;
        newNode.left = this.#clone(node.left);
        newNode.right = this.#clone(node.right);
        return newNode;
    }

    #equals(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.value !== node2.value) return false;
        return (
            this.#equals(node1.left, node2.left) &&
            this.#equals(node1.right, node2.right)
        );
    }
}