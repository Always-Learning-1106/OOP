"use strict";
// constructor function
// const Person = function (firstName, birthYear) {
//   //instance properties
//   (this.firstName = firstName), (this.birthYear = birthYear);
// };
// // Never do this
// // (this.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // });
// // };
// const jonas = new Person("Jonas", 1991);
// // console.log(jonas);

// //1. new empty object is created {}
// // 2. function is called, this = {} this. equals the new empty object
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const gwen = new Person("Gwen", 1984);
// // console.log(gwen);
// const jack = new Person("Jack", 1897);
// // console.log(gwen, jack);

// // console.log(gwen instanceof Person);
// // gwen.calcAge();

// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // gwen.calcAge();
// // jonas.calcAge();
// // console.log(Person.prototype);
// // console.log(jonas.__proto__);
// Person.prototype.species = "homo sapiens";
// // console.log(gwen, jack);
// const glenn = new Person("Glenn", 1983);
// // console.log(glenn.calcAge());
// glenn.calcAge();
// // this just links glenn to the Person class prototype
// console.log(glenn.__proto__);
// //Object.prototype is top of prototype chain
// console.log(glenn.__proto__.__proto__);
// //This returns null because you can't go higher than the Object.prototype
// console.log(glenn.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);
// const arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]; // same as new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// console.log(arr.__proto__);

// console.dir((x) => x + 1);
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return (this.speed += 10);
// };
// Car.prototype.brake = function () {
//   return (this.speed -= 5);
// };
// const lambo = new Car("lambo", 40);
// const ferrari = new Car("Ferarri", 100);

// console.log(lambo.speed);
// console.log(lambo.accelerate());
// console.log(lambo.accelerate());
// console.log(lambo.accelerate());
// console.log(lambo.brake());
// console.log(lambo.brake());

// console.log(ferrari.accelerate());
// console.log(ferrari.accelerate());
// console.log(ferrari.brake());
// console.log(ferrari.accelerate());
// console.log(ferrari.accelerate());
// console.log(ferrari.brake());

//class expression
// const PersonCh = class {
//   constructor(lastName, carType, speed) {
//     this.lastName = lastName;
//     this.carType = carType;
//     this.speed = speed;
//   }
//   speedUp() {
//     return (this.speed += 10);
//   }
// };

// const bob = new PersonCh("James", "Ford", 25);
// console.log(bob);
// PersonCh.prototype.accelerate = 25;
// console.log(bob.speedUp());
// console.log(bob.speedUp());
// console.log(bob.speedUp());
// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     return 2023 - this.birthYear;
//   }
// }
// const jessica = new PersonCl("Jessica", 1999);
// console.log(jessica);

// console.log(jessica.calcAge());

// PersonCl.prototype.greet = function () {
//   return `Hey ${this.firstName}`;
// };
// console.log(jessica.greet());

//1. classes are not hoisted
//2. Classes are first class citizens
//3. the body of class is executed in strict mode
// const nums = [2, 7, 11, 15];
// const target = 9;
// var twoSum = function (nums, target) {
// const arr = nums.map((num, i) => {
//   const answer = [];
//   if (nums[i] + nums[i + 1] === target) {
//     answer.push(nums[num]);
//     answer.push(nums[num + 1]);
//     return answer;
//   } else return -1;
// });
// return arr;
// };

// var twoSum = function (nums, target) {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i < nums.length) {
//       if (nums[i] + nums[i + 1] === target) {
//         arr.push(i);
//         arr.push(i + 1);
//       }

//     }
//   }
//   return arr;
// };
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
/*
*****************************************************STUDY THIS AND UNDERSTAND IT LATER
const nums = [3, 2, 3];
const target = 6;

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSum(nums, target));
// console.log(nums.indexOf(3));
// console.log(nums.lastIndexOf(3));
function twoSum(nums, target) {
  return nums.reduce((acc, num, index) => {
    let complement = target - num;
    if (nums.indexOf(complement) !== -1 && nums.indexOf(complement) !== index) {
      acc.push(index, nums.indexOf(complement));
    }
    return acc;
  }, []);
}
*/
// OBJECT LITERALS
// let empty = {}; /*Empty object with no properties*/
// let point = { x: 0, y: 0 }; /* Two numeric properties */
// let p2 = {
//   x: point.x,
//   y: point.y + 1,
// }; /*More complex values using previous objects to store new data in a new object */
// /*console.log(p2); x = 0 and y now equals 1 */

let book = {
  "main title": "Javascript",
  subtitle: "The definitive Guide",
  for: "all audiences",
  author: { firstName: "David", lastName: "Flanagan" },
};

// let o = new Object(); /*Creates an empty object. Same as {} */
// let a = new Array(); /*Creates an empty Array: same as [] */
// let d = new Date(); /*Creates a date object representing the current time */
// let r =
//   new Map(); /*Creates an Map object for key /value mapping... STUDY THESE VERY IMPORTANT****************************************** */
// let o1 = Object.create({ x: 1, y: 2 }); /*o1 inherits properties x a nd y */
// // console.log(o1.x + o1.y); = 3

// let o2 =
//   Object.create(
//     null
//   ); /*This creates an object with no prototypes. It's useless don't do it */
// let o3 = Object.create(
//   Object.prototype
// ); /*o3 is the samne as {} or new Object(). The ability to create a new object with an arbitrary prototype is a powerful one, and
// we’ll use Object.create() in a number of places throughout this chapter.
// (Object.create() also takes an optional second argument that describes the proper‐
// ties of the new object. This second argument is an advanced feature. One use for Object.create() is when you want to guard against unintended (but
// nonmalicious) modification of an object by a library function that you don’t have
// control over. Instead of passing the object directly to the function, you can pass an
// object that inherits from it. If the function reads properties of that object, it will see
// the inherited values. If it sets properties, however, those writes will not affect the orig‐
// inal object.
// */

let o = { x: "Don't change this value" };
// library.function(
//   Object.create(o)); /*Guards against accidental modifcations. To understand why this works, you need to know how properties are queried and set
// in JavaScript.*/

let author = book.author;
let name = author.surname;
let title = book["main title"];
book.edition = 7; /*Create an addition property of book */
book["main title"] = "ECMAScript";
// Object.property = object["property"];
let addr = "";
let customer = {
  address0: `9137 rockrose`,
  address1: `9138 rockrose`,
  address2: `9136 rockrose`,
  address3: `9134 rockrose`,
};
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
console.log(addr);

const portfolio = { IBM: 50, INTC: 125, AMD: 300 };
function addStock(portfolio, stockname, shares) {
  return portfolio[stockname]
    ? (portfolio[stockname] += shares)
    : (portfolio[stockname] = shares);
}

console.log(addStock(portfolio, "SPY", 100));
console.log(portfolio);
addStock(portfolio, "INTC", 450);
console.log(portfolio);
addStock(portfolio, "INTC", 25);
console.log(portfolio);
addStock(portfolio, "REV", 1000);
console.log(portfolio);
addStock(portfolio, "REV", 2000);
console.log(portfolio);
