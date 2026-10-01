import Node from "./node.js";

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        let currentNode = this.headNode;

        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = newNode;
    }

    prepend(value){
        const newNode = new Node(value);

        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    size (){
        let count= 0;
        let currentNode = this.headNode;

        while (currentNode !==null){
            count++;
            currentNode = currentNode.nextNode;
        }

        return count;
    }

    head(){
        if (this.headNode ===null){
            return undefined;
        }
        return this.headNode.value;
    }

    tail(){
        if (this.headNode ===null){
            return undefined;
        }

        let currentNode = this.headNode;

        while (currentNode.nextNode !==null){
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

   at(index) {
    let currentNode = this.headNode;
    let currentIndex = 0;

    while (currentNode !== null) {
        if (currentIndex === index) {
            return currentNode.value;
        }

        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    return undefined;
}

pop() {
    if (this.headNode === null) {
        return undefined;
    }

    const removedValue = this.headNode.value;

    this.headNode = this.headNode.nextNode;

    return removedValue;
}
contains(value) {
    let currentNode = this.headNode;

    while (currentNode !== null) {
        if (currentNode.value === value) {
            return true;
        }

        currentNode = currentNode.nextNode;
    }

    return false;
}
findIndex(value) {
    let currentNode = this.headNode;
    let currentIndex = 0;

    while (currentNode !== null) {
        if (currentNode.value === value) {
            return currentIndex;
        }

        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    return -1;
}
toString(){
    let result = "";
    let currentNode = this.headNode;

    while (currentNode !==null){
        result += `(${currentNode.value}) -> `;
        currentNode = currentNode.nextNode;
    }
    if (result===""){
        return "";
    }
    return result + "null";
}
insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
        throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
        for (let i = values.length - 1; i >= 0; i--) {
            this.prepend(values[i]);
        }
        return;
    }

    let currentNode = this.headNode;

    for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
    }

    let nextNode = currentNode.nextNode;

    for (const value of values) {
        const newNode = new Node(value);

        currentNode.nextNode = newNode;
        currentNode = newNode;
    }

    currentNode.nextNode = nextNode;
}
removeAt(index) {
    if (index < 0 || index >= this.size()) {
        throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
        this.headNode = this.headNode.nextNode;
        return;
    }

    let currentNode = this.headNode;

    for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = currentNode.nextNode.nextNode;
}
    }

    



export default LinkedList;