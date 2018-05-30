//Arguments (es5 functions) - we can still see and access the 100
const add = function (a, b) {
  console.log(arguments);
  return a + b;
}
console.log(add(55, 1, 100));

//Arguments (es6 arrow functions)- we can no longer see or access the 100 (returns undefined error when trying to console.log())
const add2 = (a, b) => {
  //console.log(arguments);
  return a + b;
}
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
const user = {
  name: 'Andrew',
  cities: ['Philly', 'New York', 'Dublin'],
  printPlacesLived2 () {
    //"this.name" is accessible here
    console.log(this.name);
    console.log(this.cities);
    // "this.name" is accessible here
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
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


const multiplier = {
  numbers: [2,4,6],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
