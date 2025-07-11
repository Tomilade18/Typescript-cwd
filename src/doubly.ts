class DoublyLinkedListNode{
    value: number;
    next: null | DoublyLinkedListNode
    prev: null | DoublyLinkedListNode

    constructor(value: number){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: DoublyLinkedListNode;
    tail: DoublyLinkedListNode;
    length: number;

    constructor(value: number) {
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
        this.length= 1;
    }

    append (value: number){
        const newNode = new DoublyLinkedListNode(value)
        this.tail.next= newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++
    }

    prepend(value: number){
        const newNode = new DoublyLinkedListNode(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

      traverseToIndex(index: number){
        let counter = 0
        let currentNode = this.head;
        

        while(counter !== index){
            currentNode = currentNode.next as DoublyLinkedListNode;
            counter++
        }

        return currentNode
    }

    remove(index: number){
        const prevNode = this.traverseToIndex(index - 1);
        const nodeToDelete = prevNode.next;
        const holdingNode = nodeToDelete?.next;
        prevNode.next = holdingNode as DoublyLinkedListNode;
        holdingNode && (holdingNode.prev = prevNode);
        this.length--;
    }

    insert(index: number, value: number) {
        if (index >= this.length) {
            this.append(value);
            return
        }

        const newNode = new DoublyLinkedListNode(value);
        const prevNode = this.traverseToIndex(index - 1);
        const holdingNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = holdingNode;
        holdingNode && (holdingNode.prev = newNode);
        this.length++
    }
}