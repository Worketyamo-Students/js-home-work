// var age = 22;
// console.log("hey my name is exo" + "i am " + age);
// var type = typeof age;
// console.log(type);
// //
// var l = 12;
// var w = 20;
// var perimeter = (l * w) / 2;
// console.log("The perimeter of a rectangle: " + perimeter);

// var b = 45;
// var h = 20;
// var surface = (b * h) / 2;
// console.log("The surface of a triangle: " + surface);

// var b = 20 / 2;
// var p = 15;
// var i = 20;
// var area = b * p * i;
// console.log("The area of a pyramide: " + area);
// let x = 15;
// let y = 30;
// let gx = x > y;
// let gy = y > x;
// let dif = x != y;
// let xge = x >= y;
// let yge = y >= x;
// let xlg = x <= y;
// let ylg = y <= x;
// console.log("x les greather than y:" + gx);
// console.log("y les greather than x:" + gy);
// console.log("both y and  x are difrent:" + dif);
// console.log("x les greather equal to y:" + xge);
// console.log("y les greather equal to x:" + yge);
// console.log("x les less than equal to y:" + xlg);
// console.log("y les less than equal to x:" + ylg);
// // a function id
// let L = 30;
// let W = 30;
// function permeter(l, w) {
//   return (l + w) / 2;
// }
// let semiperimter = permeter(L, W) / 2;
// let diagonal = Math.sqrt(L) + Math.sqrt(W);

// console.log("perimeter:" + permeter(L, W));
// console.log("semi-perimeter:" + semiperimter);
// console.log("diagonal:" + diagonal);
// let age = prompt("enter your age dear users");
// function test(msg) {
//   return console.log(msg);
// }
// if (age > 18) {
//   test("your a major");
// } else {
//   test("you are a minor");
// }

// let a = null;
// let b = typeof a;
// test(b);

// age.i

// ex1

// let name = prompt("enter year name dear customer");
// const age = prompt("enter age");
// let pay = true;
// console.log("name:" + name);
// console.log("age :" + age);
// function cost(costperStudents, numOfStudents) {
//   return costperStudents * numOfStudents;
// }
// console.log("total cost :" + cost(500, 1000));
// function reduction(age) {
//   if (age >= 40) {
//     console.log("your not eligable for reducton");
//   } else {
//     console.log("your are eligable for reducton");
//   }
// }

// reduction(age);

// let note1 = prompt("enter note 1");
// let note2 = prompt("enter note 2");
// let note3 = prompt("enter note 3");
// let n1 = Number(note1);
// let n2 = Number(note2);
// let n3 = Number(note3);
// let notes = [n1, n2, n3];
// let sum = notes.reduce((acc, curr) => acc + curr, 0);
// let average = sum / notes.length;
// console.log("avarege:" + average);
// console.log("name:" + typeof name);
// console.log("age:" + typeof age);
// console.log("pay:" + typeof pay);
// let participant = ["atango", "jule", "batman"];
// participant.push("exo");
// console.log("new arry:" + participant);
// let newStudent = prompt("enter new student name");
// alert("welcome" + newStudent);
// console.log("welcome" + newStudent);

// ex 2
// let a = 15;
// let b = 17;
// let notes = [75, 10, 5];
// function calculateSum(num1, num2) {
//   return console.log(num1 + num2);
// }

// calculateSum(a, b);
// function calculateAverage(arry) {
//   let sum = arry.reduce((acc, notes) => acc + notes, 0);
//   let average = sum / arry.length;
//   return console.log(average);
// }

// calculateAverage(notes);

// function converteToUppercase(strg) {
//   return console.log(strg.toUpperCase());
// }

// let name = "setane essame";
// converteToUppercase(name);

// function calculateArea(W, H) {
//   return console.log(W * H);
// }

// let l = 15;
// let w = 20;
// calculateArea(w, l);

// function isEven(num) {
//   if (num % 2 == 0) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// }
// isEven(15);

// find element in an arry
// function findElements(arr, element) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] === element) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// }

// let foodType = [1, 2, 3];
// let foodname = 3;
// console.log(findElements(foodType, foodname));

// fibonacci
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// let num = 100;
// console.log(fibonacci(num));

//factorial
function factorial(fac) {
  if (fac <= 1) {
    return 1;
  }
  return fac * factorial(fac - 1);
}

let fac = 10;

console.log(factorial(fac));
