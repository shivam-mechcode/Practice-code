'use strict';
// const list = new List(24);
// list.appendNode(300);
// console.log(list);

// const arr = [1, 2, 3, 4, 5, 6];

// let prev = null;

// // console.log(arr);
// while (arr) {
//   const next = arr.next;
//   arr.next = prev;
//   prev = arr;
//   arr = next;
// }
// console.log(prev);
// var hasCycle1 = function (head) {
//   console.log(head);
//   while (head) {
//     if (head.next === null) {
//       return true;
//     }
//     return false;
//   }
// };

// let arr = [3, 2, 0, -4];
// class List {
//   constructor(arr) {
//     this.head = arr;
//     this.next = null;
//   }

//   hasCycle() {
//     console.log(hasCycle1(arr));
//   }
// }
// const list = new List(arr);
// list.hasCycle();
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this.length++;
    return this;
  }
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  removeHead() {
    if (!this.head) return undefined;
    var currentH = this.head;
    this.head = currentH.next;
    this.length--;
    return currentH;
  }

  newHead(val) {
    var newNodeH = new Node(val);
    // var newHead = this.head;
    if (!this.head) {
      this.head = newNodeH;
    } else {
      newNodeH.next = this.head;
      this.head = newNodeH;
    }
    this.length++;
    // return this;
  }

  get(index) {
    var current = this.head;
    var count = 0;
    if (index <= 0 || index > this.length) {
      return null;
    }
    while (current) {
      if (count === index) {
        return current;
      }
      current = current.next;
      count++;
    }
  }
  set(setIndex, value) {
    var getValue = this.get(setIndex);
    if (!getValue) return null;
    getValue.val = value;
    return this;
  }
  insert(insertIndex, value) {
    var newInsertNode = new Node(value);
    if (insertIndex < 0 || insertIndex > this.length) return false;
    if (insertIndex === this.length) {
      this.push(value);
    }
    if (insertIndex === 0) {
      this.newHead(value);
    }
    var getNode = this.get(insertIndex);
    var getPrevNode = this.get(insertIndex - 1);
    var current = this.head;

    while (current) {
      if (current === getPrevNode) {
        getPrevNode.next = newInsertNode;
        newInsertNode.next = getNode;
        this.length++;
      }
      current = current.next;
    }
    return this;
  }
  remove(index) {
    var prevNode = this.get(index - 1);
    var afterNode = this.get(index + 1);
    prevNode.next = afterNode;
    this.length--;
    return this;
  }
  reverse() {
    var current = this.head;
    this.head = this.tail;
    this.tail = current;
    var prev = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    // while (current) {
    //   var afterNode = current.next;
    //   afterNode = current;
    //   current = current.next;
    // }
    return this;
  }
}

const singleLL = new SinglyLinkedList();
singleLL.push(2);
singleLL.push(4);
singleLL.push(6);
singleLL.push(9);
singleLL.push(10);

// console.log(singleLL.push(20));
