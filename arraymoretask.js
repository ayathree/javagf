// task 1---
// Write a JavaScript code to reverse the array colors without using the reverse method.
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const color_rev =[];
// for(i=0;i<colors.length;i++){
//     const b = colors[i];
//     color_rev.unshift(b);

// }
// console.log(color_rev);

// extra task(if we wanted to see just the num not a array)--
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for(i = 0; i<numbers.length; i ++){
//     if(numbers[i]%2===0){
//         console.log(numbers[i]);
//     }
// }
// task 2--
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const f =[];
// for(i = 0; i<numbers.length; i ++){
//     if(numbers[i]%2===0){
//         f.push(numbers[i]);
//     }
// }
// console.log(f);

//task 3--
// Use a for...of loop to concatenate all the elements of an array into a single string.
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let concatenatedString = "";

// for (let element of numbers) {
//     concatenatedString += element;
// }

// console.log(concatenatedString);

// task 4---
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 const statement = 'I am a hard working person'

let words = statement.split(' ');
let rev_words = words.reverse();
// array var is reversible but not a string var.
let join_words = rev_words.join(' ');
console.log(join_words);

// var array = statement.split(" ");
// var result=" ";
// for (var i = array.length-1; i >=0; i--) {
//     result+=array[i]+" ";
// }
// console.log(rev_words);