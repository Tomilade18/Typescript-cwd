class queueNode <T> {
    value: T;
    next: queueNode <T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null
    }
}

class queue <T> {
    head: stackNode<T> | null;
    tail: stackNode<T> | null;
    private length: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value:T){
        const newNode = new queueNode(value);

        if(this.isEmpty()){
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length ++
        
    }

    dequeue(){
        if (this.isEmpty()){
            return "there nothing in the queue"
        } else {
            const dequeuedNode = this.tail

            // this.tail = 
        }
    }

    isEmpty(){
        return this.length === 0
    }
}