// // function printPattern(n) {


// // }

// // printPattern(5);

// for (let i = 5; i >= 1; i--) {
//       let row = '';
//       for (let k = i; k >= 1; k--) {
//             row += k + ' ';

//       }
//       for (let space = 0; space < 5 - i; space++) {
//             row += '  ';
//       }
//       for (let space = 0; space < 5 - i; space++) {
//             row += '  ';
//       }
//       for (let j = 1; j <= i; j++) {

//             row += j + ' ';

//       }
//       console.log(row);

// }


// function floydsTriangle(rows) {
//       let triangle = [];
//       // Generating the triangle
//       for (let i = 1; i <= rows; i++) {
//             let row = [];
//             for (let j = i; j >= 1; j--) {
//                   row.push(j);
//             }
//             triangle.push(row);
//       }


//       // Converting the triangle to a string
//       let triangleString = "";
//       triangle.forEach(row => {
//           triangleString += row.join("-") + "\n";
//       });

//       return triangleString;
//   }

//   console.log(floydsTriangle(5));





// function bubbleSort(arr) {
//       let len = arr.length;
//       for (let i = 0; i < len - 1; i++) {
//             for (let j = 0; j < len - i - 1; j++) {
//                   if (arr[j] > arr[j + 1]) {
//                         // Swap elements if they are in the wrong order
//                         let temp = arr[j];
//                         arr[j] = arr[j + 1];
//                         arr[j + 1] = temp;

//                   }
//             }
//       }
//       return arr[arr.length - 1];
// }

// let numbers = [5, 3, 8, 1, 4];
// console.log("Original array:", numbers);
// console.log("Sorted array:", bubbleSort(numbers));




function bubbleSort(arry) {
      for (let i = 0; i < arry.length; i++) {
            for (let k = 0; k < arry.length; k++) {
                  if (arry[k] > arry[k + 1]) {
                        
                        [arry[k], arry[k + 1]] = [arry[k + 1], arry[k]]
                  }
            }

      }
      return arry
}

let numbers = [5, 3, 8, 1, 4];
console.log("Original array:", numbers);
console.log("Sorted array:", bubbleSort(numbers));