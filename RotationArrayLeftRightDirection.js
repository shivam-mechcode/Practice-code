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
