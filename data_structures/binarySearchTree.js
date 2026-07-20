import { Queue } from "./queue.js";

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    #root;
    #size;

    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    /* ================= Basic State ================= */

    size() {
        return this.#size;
    }

    is_empty() {
        return this.#size === 0;
    }

    clear() {
       this.#root = null;
       this.#size = 0;
    }

    /* ================= Insert / Delete ================= */

    insert(value) {
        this.#root = this.#_insert(this.#root, value);
    }

    delete(value) {
        if (!this.contains(value)) return false;
        this.#root = this.#_delete(this.#root, value);
        this.#size--;
        return true;
    }

    contains(value) {
        let curr = this.#root;
        while (curr) {
            if (curr.value < value) {
                curr = curr.right;
            }
            else if (curr.value > value) {
                curr = curr.left;
            }
            else {
                return true;
            }
        }
        return false;
    }

    /* ================= Height & Depth ================= */

    get_height() {
        return this.#_get_height(this.#root);
    }

    get_depth(value) {
        let curr = this.#root;
        let depth = 0;
        while (curr) {
            if (curr.value === value) {
                return depth;
            }
            if (curr.value > value) {
                curr = curr.left;
            }
            else {
                curr = curr.right
            }
            depth++;
        }
        return -1;
    }

    /* ================= Min / Max ================= */

    find_min() {
        const node = this.#_find_min(this.#root);
        return node ? node.value : undefined;
    }

    find_max() {
        const node = this.#_find_max(this.#root);
        return node ? node.value : undefined;
    }

    /* ================= Traversals ================= */

    level_order() {
        const res = [];
        if (!this.#root) return res;
        const queue = new Queue();
        queue.enqueue(this.#root);
        while (!queue.isEmpty()) {
            const el = queue.dequeue();
            res.push(el.value);
            if (el.left) {
                queue.enqueue(el.left);
            }
            if (el.right) {
                queue.enqueue(el.right);
            }
        }
        return res;
    }

    inorder_rec() {
        const res = [];
        this.#_inorder(this.#root, res);
        return res;
    }

    inorder_itr() {
        let res = [];
        if (!this.#root) return res;
        let stack = [];
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

    preorder_rec() {
        const res = [];
        this.#_preorder(this.#root, res);
        return res;
    }

    preorder_itr() {
        let res = [];
        if(!this.#root) return res;
        const stack = [this.#root];
        while (stack.length) {
            let node = stack.pop();
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

    postorder_rec() {
        const res = [];
        this.#_postorder(this.#root, res);
        return res;
    }

    postorder_itr() {
        let res = [];
        if (!this.#root) return res;
        let s1 = [this.#root];
        let s2 = [];
        while (s1.length) {
            let node = s1.pop();
            s2.push(node.value);
            if (node.left) {
                s1.push(node.left);
            }
            if (node.right) {
                s1.push(node.right);
            }
        }
        while (s2.length) {
            res.push(s2.pop());
        }
        return res;
    }

    /* ================= Advanced Operations ================= */

    find_successor(value) {
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
                    return this.#_find_min(curr.right).value;
                }
                break;
            }
        }
        return successor ? successor.value : null;
    }

    find_predecessor(value) {
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
                    return this.#_find_max(curr.left).value;
                }
                break;
            }
        }
        return predecessor ? predecessor.value : null;
    }

    is_balanced() {
       return this.#_is_balanced(this.#root);
    }

    validate_BST() {
        return this.#_validate_BST(this.#root, -Infinity, Infinity);
    }

    /* ================= Utilities ================= */

    toArray() {
        const res = [];
        this.#_inorder(this.#root, res);
        return res;
    }

    clone() {
        const copy = new BST();
        copy.#root = this.#_clone(this.#root);
        copy.#size = this.#size;
        return copy;
    }

    equals(otherTree) {
        if(!(otherTree instanceof BST)) return false;
        return this.#_equals(this.#root, otherTree.#root);
    }

    /* ================= Iteration ================= */

    *[Symbol.iterator]() {
        let res = [];
        this.#_inorder(this.#root, res);
        for (const value of res) {
            yield value;
        }
    }

    *values() {
        const res = [];
        this.#_inorder(this.#root, res);
        for (const value of res) {
            yield value;
        }
    }

    *entries() {
        const res = [];
        this.#_inorder(this.#root, res);
        for (let i = 0; i < res.length; i++) {
            yield [i, res[i]];
        }
    }

    /* ================= Private Helpers ================= */

    #_insert(node, value) {
        if (!node) {
            this.#size++;
            return new Node(value);
        }
        if (node.value > value) {
            node.left = this.#_insert(node.left, value);
        }
        else if (node.value < value) {
            node.right = this.#_insert(node.right, value);
        }
        return node;
    }

    #_delete(node, value) {
        if (!node) return null;
        if (node.value > value) {
            node.left = this.#_delete(node.left, value);
        }
        else if (node.value < value) {
            node.right = this.#_delete(node.right, value);
        }
        else {
            if (!node.left && !node.right) return null;
            if (!node.right) return node.left;
            if (!node.left) return node.right;
            if (node.left && node.right) {
                let tmp = this.#_find_min(node.right);
                node.value = tmp.value;
                node.right = this.#_delete(node.right, tmp.value);
            }
            return node;
        }
        return node;
    }

    #_find_min(node) {
        if (!node) return undefined;
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    #_find_max(node) {
        if (!node) return undefined;
        while (node.right) {
            node = node.right;
        }
        return node;
    }

    #_get_height(node) {
        if (!node) return 0;
        let leftHeight = this.#_get_height(node.left);
        let rightHeight = this.#_get_height(node.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    #_inorder(node, result) {
        if (!node) return result;
        this.#_inorder(node.left, result);
        result.push(node.value);
        this.#_inorder(node.right, result);
        return result;
    }

    #_preorder(node, result) {
        if (!node) return result;
        result.push(node.value);
        this.#_preorder(node.left, result);
        this.#_preorder(node.right, result);
        return result;
    }

    #_postorder(node, result) {
        if (!node) return result;
        this.#_postorder(node.left, result);
        this.#_postorder(node.right, result);
        result.push(node.value);
        return result;
    }

    #_is_balanced(node) {
        if(!node) return true;
        let leftHeight = this.#_get_height(node.left);
        let rightHeight = this.#_get_height(node.right);
        return  (Math.abs(leftHeight - rightHeight) <= 1) &&
        this.#_is_balanced(node.left) &&
        this.#_is_balanced(node.right);
    }

    #_clone(node) {
        if (!node) return null;
        const newNode = new Node(node.value);
        newNode.left = this.#_clone(node.left);
        newNode.right = this.#_clone(node.right);
        return newNode;
    }

    #_validate_BST(node, min, max) {
        if (!node) return true;

        if (node.value <= min || node.value >= max) return false;

        return (
        this.#_validate_BST(node.left, min, node.value) &&
        this.#_validate_BST(node.right, node.value, max)
        );
    }

    #_equals(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.value !== node2.value) return false;
        return (
        this.#_equals(node1.left, node2.left) &&
        this.#_equals(node1.right, node2.right)
        );
    }
}