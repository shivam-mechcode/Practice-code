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
