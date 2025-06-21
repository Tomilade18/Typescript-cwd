"use strict";
class singlyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class singlyLinkedList {
    constructor(value) {
        this.head = new singlyLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new singlyLinkedListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }
}
