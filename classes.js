// const Person = function (firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never to this!
//     // this.calcAge = function () {
//     //   console.log(2037 - this.birthYear);
//     // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// Person.hey = function () {
//     console.log('Hey there 👋');
//     console.log(this);
// };
// Person.hey();
// const Person = function (firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never to this!
//     // this.calcAge = function () {
//     //   console.log(2037 - this.birthYear);
//     // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda, jack);

// const EcommerceFunc = function (number, arr) {
//   this.number = number;
//   this.arr = arr;
//   console.log(this);
// };

// const ecommerce = new EcommerceFunc(232, [25, 20, 35, 47, 50, 30, 21]);

// EcommerceFunc.prototype.totalCart = function () {
//   console.log(this.number);
// };
// EcommerceFunc.prototype.cartStringConv = function () {
//   //   console.log(this.arr);
//   const n = this.arr.length;
//   var temp;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (this.arr[j] < this.arr[i]) {
//         temp = this.arr[i];
//         this.arr[i] = this.arr[j];
//         this.arr[j] = temp;
//       }
//     }
//   }
//   console.log(this.arr);
// };

// const arr = [1, 2, 34, 5, 6, 7];
// Array.prototype.unique = function () {
//   [...new Set(this)];
// };

// ecommerce.cartStringConv();
// console.log(ecommerce.__proto__);
// console.log(ecommerce.cartStringConv());
// ecommerce.totalCart();
// console.log(arr.unique());
// console.log(ecommerce.number);

// class Form {
//   constructor(str, exp) {
//     this.str = str;
//     this.exp = exp;
//     console.log(this.str);
//   }

//   biodata() {
//     console.log(`My name is ${this.str} and age ${this.exp}`);
//   }
// }

// const createForm = new Form('shivam', 3);
// createForm.biodata();

// class List {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };
//     this.tail = Object.assign({}, this.head);
//   }
//   appendNode(nodeData) {
//     let newNode = {
//       value: nodeData,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }
// }
