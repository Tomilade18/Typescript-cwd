class singlyLinkedListNode{
    value: number;
    next: null | singlyLinkedListNode

    constructor(value: number){
        this.value = value;
        this.next = null;
    }
}

class singlyLinkedList{
    head: singlyLinkedListNode;
    tail: singlyLinkedListNode;
    private length: number;

    constructor(value: number) {
        this.head = new singlyLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append (value: number){
        const newNode = new singlyLinkedListNode(value)
        this.tail.next = newNode

        this.tail = newNode;
        
    }

    // prepend(value: number) {
    //     const newNode = new
    // }

    traverseToIndex(index: number){
        let counter = 0
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next as singlyLinkedListNode;
            counter++
        }

        return currentNode
    }

    remove(index: number) {
        const prevNode = this.traverseToIndex(index - 1)

        const nodeToDelete = prevNode.next;
      

        const holdingNode = nodeToDelete?.next;

        prevNode.next = holdingNode as singlyLinkedListNode;

        this.length--;
    }

    reverse() {
        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;

        let second = first.next;

        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
    }
}

