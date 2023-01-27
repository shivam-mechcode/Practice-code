// "use strict";
// (function () {
//   var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== "undefined"));
// console.log("b defined? " + (typeof b !== "undefined"));

//Global Scope
// var variable1 = "Comrades";
// var variable2 = "Sayonara";

// function outer(){
// //outer's scope
//   var variable1 = "World";
//   function inner(){
//   //inner's scope
//     var variable2 = "Hello";
//     console.log(variable2 + " " + variable1);
//   }
//   inner();
// }
// outer();

// userObj = {
//   name: "Shivam",
//   age: "28"
// }

// function userInfo(obj){
//   return function(userinfo){
//     return obj[userinfo]
//   }
// }

// let res = userInfo(userObj)
// console.log(res('name'))
//   let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

// clearTimeout(timerId);
// alert(timerId); // same identifier (doesn't become null after canceling)function sayHi() {
// let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

// function getName(){
//   console.log("Hi")
// }

// setInterval(getName, 5000)

// let myArray = [1, 2, 3, 4];

//     const returnValue = myArray.forEach((element) => {
//         return element * element;
//     });

// console.log(returnValue)

// let myArray1 = [1, 2, 3, 4];

//     const returnValue1 = myArray1.map((element) => {
//         return element * element;
//     });

// console.log(returnValue1)

// const arr = [1, 4, 5, 7]

// const value = arr.map((values) => {
//   return (values + values)
// })

// console.log(value)
// // [2,8,10,14]

// const arr1 = [1, 4, 5, 7]

// const value1 = arr1.forEach((values) => {
//   return (values + values)
// })

// console.log(value1)

// function names(){
//   var age = 24
//   console.log(age)
//   var age = 30
//   console.log(age)
// }

// names()

// let greeting = "say Hi";
// let times = 4;

//    if (times > 3) {
//         let hello = "say Hello instead";
//         console.log(greeting);// "say Hello instead"
//     }
// console.log(greeting)
//  console.log(hello) // hello is not defined
//  let number = 23
//  console.log(number)

// let a = "shivam"
// let b = a
// b= 'rahul'
// console.log(a) // print shivam
// console.log(b)

// let obj = {
// 	name: "shivam"
// }
// obj2 = obj
// obj2.name = "rahul"
// console.log(obj2)
// console.log(obj)

/* SHALLOW COPY AND DEEP COPY */

// let obj = {
// 	name: "shivam",
//   address: {
//     city: "Noida",
//     state: "UP"
//   },
//   getName: function() {
//     return "All Good"
//   }
// }

// let obj2 = Object.assign({},obj)
// let obj2 = {...obj}
// let obj2 = JSON.parse(JSON.stringify(obj))
// let obj2 = _.cloneDeep(obj)

// obj2.address.city = "Gurgaon"
// console.log(obj2) // print rahul
// console.log(obj) // print shivam

// PROMISES

// const reponse = fetch("https://fakestoreapi.com/users").then(function(res){
//   return res.json()
// }).then(function(data){
//   console.log(data)
// })

// const reponse = fetch("https://fakestoreapi.com/users").then(res => res.json()).then(data => console.log(data))
// const response = fetch("https://fakestoreapi.com/users")
// console.log(response)

// const str = "mynameisshivam";
// const arr = ["s", "u", "p"];
// const oneLetter = "n";
// const arr2 = arr.map((s) => {
//   console.log(s);
// });
// const arr1 = str.split("").map((s) => {
//   console.log(s);
// });

/*SORTING OF STRING WITHOUT USING PREBUILT FUNCTIONS */

// function sort(arr) {
//   arr = arr.split("");
//   // console.log(arr[0]);
//   // console.log(arr[1]);

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   arr.join();
//   return arr.replace(/[.,\s]/g, "");

//   // for (let i = 0; i < arr.length; i++) {
//   //   for (let j = 0; j < arr.length; j++) {
//   //     if (arr[j] > arr[i]) {
//   //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//   //     }
//   //   }
//   // }
//   // return arr.join("");
// }
// console.log(sort("dcna"));

/*REVERSE EACH WORD OF A STRING */

// let str = "shivam is a great person";
// const str2 = str.split(" ");
// var r = "";
// for (let i = 0; i <img str2.length; i++) {
//   for (let j = str2[i].length - 1; j >= 0; j--) {
//     r = r + str2[i].charAt(j);
//   }
//   r = r + " ";
// }

// console.log(r);

/* ROTATION OF AN ARRAY IN LEFT DIRECTION*/
// const rotaionArray = (arr, rotation) => {
//   const n = arr.length;
//   let p = 0;
//   while (p < rotation) {
//     let last = arr[0];
//     for (let i = 0; i < n - 1; i++) {
//       arr[i] = arr[i + 1];
//     }
//     arr[n - 1] = last;
//     p++;
//   }
//   return arr;
// };

// arr = [1, 2, 3, 4, 5, 6, 7];
// rotation = 2;
// console.log(rotaionArray(arr, rotation));

/* ROTATION OF AN ARRAY IN RIGHT DIRECTION*/
// const rotaionArray = (arr, rotation) => {
//   const n = arr.length;
//   let p = 0;
//   while (p < rotation) {
//     let first = arr[n - 1];
//     for (let i = n - 1; i >= 0; i--) {
//       arr[i] = arr[i - 1];
//     }
//     arr[0] = first;
//     p++;
//   }
//   return arr;
// };

// arr = [1, 2, 3, 4, 5, 6, 7]; // 6,7,1,2,3,4,5
// rotation = 2;
// console.log(rotaionArray(arr, rotation));

/* ROTATION OF AN STRING IN RIGHT DIRECTION*/
// const rotaionArray = (str, rotation) => {
//   const str1 = str.split("");
//   console.log(str1);
//   const n = str1.length;
//   let p = 0;
//   while (p < rotation) {
//     let first = str1[n - 1];
//     for (let i = n - 1; i >= 0; i--) {
//       str1[i] = str1[i - 1];
//     }
//     str1[0] = first;
//     p++;
//   }

//   return str1.join("");
// };

// str = "shivam"; // amshiv
// rotation = 2;
// console.log(rotaionArray(str, rotation));

/* LINEAR SEARCHING */
// const arr = [1, 2, 4, 6, 8, 9];
// const no = 8;
// let searchedNumber = null;
// // console.log(no);
// const search = arr.map((arr1, index) => {
//   if (arr1 === no) {
//     searchedNumber = index;
//   }
// });
// console.log(searchedNumber);

/* SPREAD AND REST OPERATOR */
/* SPREAD OPERATOR USAGE */
// const str = "shivam";
// let str1 = [...str];
// console.log(str1);

/* REST OPERATOR USAGE */
// function sum(...num) {
//   console.log(num);
// }

// console.log(sum(3, 4, 5));

// function getMobile(manufacturer, model, year)  {
//   return {
//     manufacturer,
//     model,
//     year,
//   };
// }
// console.log(getMobile("Samsung", "Galaxy", "2020"));

// const body = document.body;
// const div = document.createElement("div");
// const img = document.createElement("img");
// const input = document.createElement("input");
// input.innerHTML = "";
// img.innerHTML = "";
// div.innerText = "Hello Shivam Chauhan";
// div.append(img);
// div.append(input);
// body.append(div);

// var arr = [1, 20, 35, 47, 50, 30, 21];
// const n = arr.length;
// let temp;
// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n; j++) {
//     if (arr[j] < arr[i]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// console.log(myspace("my name is shivam chauhan"));

// function myspace(str) {
//   var arr = [];
//   // console.log(str.charAt(0));
//   var delimiter = "$#";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === " " || str.charAt(i) == delimiter) {
//       arr = arr + str.charAt(i);
//     }
//   }
//   return arr;
// }

// id = TEST;
// id = Test;
// id = tEST;
