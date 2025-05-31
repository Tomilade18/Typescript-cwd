var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var individual = ["tomi", "tumi", "tola", "tolu", "bola", "bolu", "ola", "olu"];
var persons = __spreadArray([], individual, true);
// let people = individual.toString()
var people = individual.join(" and ");
var peoples = individual.concat(persons);
peoples.splice(1, 2, "bill", "bob");
console.log(persons.length);
// console.log(individual)
console.log(peoples);
console.log(persons.pop());
console.log(persons);
var lengt = individual.push("tomi");
console.log(lengt);
persons.sort();
persons.reverse();
console.log(persons);
var numbers1 = [1, 2, 4];
function myfunction(value) {
    return value * 2;
}
var number2 = numbers1.map(myfunction);
console.log(number2);
