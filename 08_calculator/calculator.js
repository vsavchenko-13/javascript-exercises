const add = function(a,b) {
	let add = 0;
  add = a + b;
  return add;
}

const subtract = function(a,b) {
	let subtract = 0;
  subtract = a - b;
  return subtract;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let multiply = arr[0];
  for (let i = 1; i < arr.length; i++){
    multiply = multiply * arr[i];
  }
  return multiply;
};

const power = function(a,b) {
	let answer = 1;
  for(let i = 0; i < b; i++){
    answer = answer * a;
  }
  return answer;
};

const factorial = function(num) {
	let answer = 1;
  for (let i = 1; i <= num; i++){
    answer = answer * i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
