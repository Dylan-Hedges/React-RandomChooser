//Function (es5)
function square (x) {
  return x * x;
};
console.log(square(2));

//Arrow function (es6)
const squareArrow1 = (x) => {
  return x * x;
};
console.log(squareArrow1(4));

//Single line arrow function (es6)
const squareArrow2 = (x) => x * x;
console.log(squareArrow2(8));

//Arrow function (es6)
const getFirstName1 = (fullName) => {
  return fullName.split(' ')[0];
};
console.log(getFirstName1('Andrew Mead'));

//Single line arrow function (es6)
const getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2('Andrew Mead'));
