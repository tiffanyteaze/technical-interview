//Write a function which helps to achieve multiply(a)(b) and returns product of a and b
const multiply = (x) => {
  return function (y) {
    return x * y;
  }
}

const mult5 = multiply(5);
console.log(mult5(5));
console.log(multiply(2)(3));