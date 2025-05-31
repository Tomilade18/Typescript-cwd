let employee: {
    readonly id: number,
    name: string
} = {id: 1, name: ""};
employee.name ='mosh'




class rectangle{
    x: number
    y: number

    constructor(x: number, y: number){
        this.x = x
        this.y = y
    }
}

class rhombus extends rectangle {
    area(){
        console.log("area of rhombus"+ " is " + this.x*this.y)
    }
}

const obj = new rhombus(12,10);


 
obj.area()