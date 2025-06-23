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
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const prevNode = this.traverseToIndex(index - 1);
        const nodeToDelete = prevNode.next;
        const holdingNode = nodeToDelete === null || nodeToDelete === void 0 ? void 0 : nodeToDelete.next;
        prevNode.next = holdingNode;
        this.length--;
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}
