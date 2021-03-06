'use strict';

//Arguments (es5 functions) - we can still see and access the 100
var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 100));

//Arguments (es6 arrow functions)- we can no longer see or access the 100 (returns undefined error when trying to console.log())
var add2 = function add2(a, b) {
  //console.log(arguments);
  return a + b;
};
console.log(add2(55, 1, 100));

//"this" keyword (es5 functions)- when inside of this anaonymous function "this" is bound to the function and not to the overall object (returns cannot read property 'name' of undefined error)
// const user = {
//   name: 'Andrew',
//   cities: ['Philly', 'New York', 'Dublin'],
//   printPlacesLived: function () {
//     const that = this;
//     //"this.name" is accessible here
//     console.log(this.name);
//     console.log(this.cities);
//     // "this.name" is not accessible here (causes undefined error)
//     this.cities.forEach(function (){
//       console.log(this.name + 'has lived in' + city);
//     });
//   }
// };
// user.printPlacesLived();

//"this" keyword (es6 arrow functions) - by turning it to an es6 arrow function we can now access "this.name" inside of our "forEach()" function
var user = {
  name: 'Andrew',
  cities: ['Philly', 'New York', 'Dublin'],
  printPlacesLived2: function printPlacesLived2() {
    var _this = this;

    //"this.name" is accessible here
    console.log(this.name);
    console.log(this.cities);
    // "this.name" is accessible here
    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};
//user.printPlacesLived2();

//.map function - loop through and transform the functions in array
// const user = {
//   name: 'Andrew',
//   cities: ['Philly', 'New York', 'Dublin'],
//   printPlacesLived () {
//     const cityMessages = this.cities.map((city) => {
//       return this.name = ' has lived in ' + city;
//     });
//     return cityMessages;
//   }
// };
//console.log(user.printPlacesLived());


var multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
