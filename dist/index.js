"use strict";
let employee = { id: 1, name: "" };
employee.name = 'mosh';
class rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class rhombus extends rectangle {
    area() {
        console.log("area of rhombus" + " is " + this.x * this.y);
    }
}
const obj = new rhombus(12, 10);
obj.area();
