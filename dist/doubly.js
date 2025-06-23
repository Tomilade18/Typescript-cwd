"use strict";
class DoublyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new DoublyLinkedListNode(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new DoublyLinkedListNode(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
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
        holdingNode && (holdingNode.prev = prevNode);
        this.length--;
    }
    insert(index, value) {
        if (index >= this.length) {
            this.append(value);
            return;
        }
        const newNode = new DoublyLinkedListNode(value);
        const prevNode = this.traverseToIndex(index - 1);
        const holdingNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = holdingNode;
        holdingNode && (holdingNode.prev = newNode);
        this.length++;
    }
}
