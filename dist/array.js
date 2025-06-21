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
        else {
            console.log(`name not found`);
        }
    }
    removeLastMember() {
        if (this.list.length > 5) {
            this.list.pop();
        }
    }
    listMembers() {
        if (this.list.length !== 0) {
            this.list.sort();
            console.log(this.list.toString());
        }
        else {
            console.log('List is currently empty');
        }
    }
    capitalizeMember() {
        const capitalmember = this.list.map(member => member.toUpperCase());
        console.log(capitalmember);
    }
}
Tomi.nextid = 1;
const tumi = new Tomi([]);
tumi.addMember('Bola');
tumi.addMember('Obu');
tumi.addMember('Olu');
tumi.addMember('Obe');
tumi.addMember('Obi');
tumi.addMember('Obi');
tumi.addMember('ibu');
console.log(tumi);
tumi.removeMember('Bola');
console.log(tumi);
tumi.removeLastMember();
console.log(tumi);
tumi.capitalizeMember();
console.log(tumi);
