// Problem Solving 

// function containsValue(array, value) {

//   return array.includes(value)
// }
// const numbers = [1, 2, 3, 4, 5];

// console.log(containsValue(numbers, 3));

// function flattenArray(array){
//   let arr = array.flat()
//   return arr.flat();
// }
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// console.log(flattenArray(nestedArray)); 


const a = [10, 20, 60]
function videoClip(a) {
  let b = a.reduce((sum, duration) => sum + duration, 0);
  return b <= 80; // false
  // return b <= 200; --> true
}
console.log(videoClip(a))