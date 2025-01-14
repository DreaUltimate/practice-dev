"use strict";

// Algorithm V - Assignment

// 1. Given an array and a value Y, count and print the number of array values greater than Y.
const greaterThanY = function (x) {
  let numbersGreaterThanY = 0;
  for (let i = 0; i < x.length; i++) {
    if (y < x[i]) {
      numbersGreaterThanY = x[i];
      console.log(numbersGreaterThanY);
    }
  }
  return numbersGreaterThanY;
};

let y = 5;
const numArr = [6, 2, 3, 8, y, 7, 9];
greaterThanY(numArr);

// 2. Given an array, print the max, min, and average values for that array.
const calcMax = function (x) {
  let max = x[0];
  for (let i = 0; i < x.length; i++) {
    if (max < x[i]) {
      max = x[i];
    }
  }
  return max;
};

const calcMin = function (x) {
  let min = x[0];
  for (let i = 0; i < x.length; i++) {
    if (min > x[i]) {
      min = x[i];
    }
  }
  return min;
};

const calcAverage = function (x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  const average = sum / x.length;
  return average;
};

const printMaxMinAverage = function (x) {
  const min = calcMin(x);
  const max = calcMax(x);
  const average = calcAverage(x);
  console.log(min);
  console.log(max);
  console.log(average);
};

//Example:
y = [-1, 5, 3];
printMaxMinAverage(y);

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’. For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

const replaceNegatives = function (x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      x[i] = "Dojo";
    }
  }
  return x;
};

console.log(replaceNegatives([1, 2, -3, -5, 5]));

// 4. Given an array, and indices start and end, remove values in that index range, working in place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

const removeVals = function (array, start, end) {
  if (start >= 0 && start <= end && end < array.length) {
    const removedVal = end - start + 1;
    for (let i = start; i <= end; i++) {
      array[i] = array[i + removedVal];
    }
    array.length -= removedVal;
    return array;
  }
};

y = [20, 30, 40, 50, 60, 70];
console.log(removeVals(y, 2, 4));
