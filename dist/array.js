"use strict";
class Tomi {
    constructor(list) {
        this.list = [];
        this.list = list;
        this.id = Tomi.nextid++;
    }
    addMember(name) {
        this.list.push(name);
        console.log(`${name} was added`);
    }
    removeMember(name) {
        const index = this.list.findIndex(member => member === name);
        if (index !== -1) {
            const deleted = this.list.splice(index, 1)[0];
            console.log(`${deleted} has been removed`);
        }
    }
}
Tomi.nextid = 1;
const tumi = new Tomi([]);
tumi.addMember('Bola');
tumi.addMember('Obu');
console.log(tumi);
tumi.removeMember('Bola');
console.log(tumi);
