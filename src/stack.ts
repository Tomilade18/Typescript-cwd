class Stack{
    static nextid = 0;
    value: number[] = [];
    id: number;

    constructor(value: number[]){
        this.value = value;
        this.id = Stack.nextid++
    }

    addTostack(value: number){
        this.value.push(value)
        this.id++
    }

    removeFromStack(){
        if(this.isEmpty()){
            return  this.value.pop()
        }
       
        this.id--
    }

    isEmpty() {
        return this.removeFromStack.length === 0;
    }

    peek(){
        if(this.isEmpty()) return 'The tack is empty. Nothing to peek!'
            return this.value[this.removeFromStack.length - 1]
    }

}


const tomi = new Stack([])

tomi.addTostack(30)
tomi.addTostack(20)
tomi.addTostack(10)

console.log(tomi)