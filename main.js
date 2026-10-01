import LinkedList from "./linked-list.js";

const list = new LinkedList();

console.log("Empty list:", list.toString());

list.append("dog");
list.append("cat");
list.append("parrot");

console.log("After append:", list.toString());

list.prepend("hamster");

console.log("After prepend:", list.toString());

console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());

console.log("At index 2:", list.at(2));
console.log("Contains cat:", list.contains("cat"));
console.log("Contains snake:", list.contains("snake"));

console.log("Index of parrot:", list.findIndex("parrot"));
console.log("Index of snake:", list.findIndex("snake"));

list.insertAt(2, "snake", "turtle");

console.log("After insertAt:", list.toString());

list.removeAt(2);

console.log("After removeAt:", list.toString());

console.log("Pop:", list.pop());
console.log("After pop:", list.toString());