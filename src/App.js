import React, { useState } from "react";
import './App.css';

const App =() => {
  return (
    <div>
      Hello world
    </div>
  );
}

// Challenge 1
function addTwo(num) {
return num + 2
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
return word + "s"
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3

function multiplyByTwo(num) {
  return num * 2
}
function map(array, callback) {
  let noviArray = []
array.forEach(x => noviArray.push(callback(x)))
return noviArray
}

console.log(map([1, 2, 3], addTwo));
console.log(map([1,2,3,4,5], multiplyByTwo)); //-> [2,4,6,8,10]


// Challenge 4
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
function forEach(array, callback) {
array.forEach(x => callback(x))
}
console.log(alphabet);

// Challenge 5
function mapWith(array, callback) {

}
// Drugi zadatak

function evenNumbers (array)  {
  return array.filter(x => {return x % 2 == 0})
}
console.log(evenNumbers([1,2,3,4,5,6]));

function bigStrings (array) {
  return array.filter(x=> {return x.length>5})
}
console.log(bigStrings(["ivor","djerbez","ivi","jasmin"]));
function checkActive (array) {
  return array.filter(x=> {return x.isActive===true})
}
console.log(checkActive([{id:"Ivor", isActive:true}, {id:"Jasmin", isActive:false}, {id:"Emel", isActive:true}]));
function sumAllNumbers(array) {
  let sum = 0;
  array.forEach(x => {sum+=x})
  return sum;
}
console.log(sumAllNumbers([1,2,3,4,5]));
function productAllNumbers(array) {
  let sum = 1;
  array.forEach(x => {sum*=x})
  return sum;
}
console.log(productAllNumbers([1,2,3,4,5]));
function concatStrings (array) {
  return array.join(" ")
}
console.log(concatStrings(["Ivor","Đerbez","majstor"]));
function averageNumber (array) {
  let sum = 0;
  array.forEach(x => {sum +=x})
  let average = sum / array.length
  return average
}
console.log(averageNumber([1,2,3,4]));
function numberOfObjects (array) {
  let newArray = array.filter(x=> {return x.isActive===true})
  return newArray.length
}
console.log(numberOfObjects([{id:"Ivor", isActive:true}, {id:"Jasmin", isActive:false}, {id:"Emel", isActive:true}]));
function maxNumber (array) {
  return Math.max(...array)
}
console.log(maxNumber([1,2,3,4,5]))
function minNumber (array) {
  return Math.min(...array)
}
console.log(minNumber([1,2,3,4,5]))
export default App;
