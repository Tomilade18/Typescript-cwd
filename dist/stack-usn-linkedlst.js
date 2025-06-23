"use strict";
class stackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new stackNode(value);
        if (this.isEmpty()) {
            this.bottom = newNode;
            this.top = newNode;
            this.length++;
        }
        else {
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
            this.length++;
        }
    }
    pop() {
        var _a;
        if (this.isEmpty())
            return 'Nothing to pop, stack is empty';
        const poppedNode = this.top;
        this.top = ((_a = this.top) === null || _a === void 0 ? void 0 : _a.next) || null;
        if (!this.top) {
            this.bottom = null;
        }
        this.length--;
        return poppedNode;
    }
    peek() {
        var _a;
        if (this.isEmpty())
            return 'stack is empty';
        return (_a = this.top) === null || _a === void 0 ? void 0 : _a.value;
    }
    isEmpty() {
        return this.length === 0;
    }
}
