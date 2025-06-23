class stackNode<T> {
    value: T;
    next: stackNode<T> | null;

    constructor(value: T){
        this.value = value;
        this.next = null;
    }
}

class stack<T> {
    top: stackNode<T> | null;
    bottom:stackNode<T> | null;
    private length: number;

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value: T) {
        const newNode = new stackNode(value);
        if(this.isEmpty()) {
            this.bottom = newNode;
            this.top = newNode;
            this.length++
        } else {
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
            this.length++
        }
    }

    pop(){
        if(this.isEmpty()) return 'Nothing to pop, stack is empty';

        const poppedNode = this.top;

        this.top = this.top?.next || null;

        if(!this.top) {
            this.bottom = null;
        }

        this.length --
        return poppedNode;
    }

    peek() {
        if(this.isEmpty()) return 'stack is empty';
        return this.top?.value;
    }

    isEmpty() {
        return this.length === 0
    }
}