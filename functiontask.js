// // task 1---
// // Take four parameters. Multiply the four numbers and then return the result

// function numbers(x,y,z,a) {
//     const mull = x*y*z*a;
//     return mull;
    
// }
// const result = numbers(2,3,4,5);
// console.log(result);

// // Task-2----
// // Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function isOddEven(x) {
//     if (x%2==1) {
//         const d = x*2;
//         return d;
        
//     }
//     else{
//         const s = x/2;
//         return s;
//     }
    
// }
// const c = isOddEven(120);
// console.log(c);

// // task 3--
// // Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(array) {
//     const len = array.length;
//     let sum = 0;
//     for(let item of array){
//         sum +=item;
//     }
//     const d = sum/len;
//     return d;
     
// }
// const c = [12, 23, 34, 45, 56,46,78];
// const t =make_avg(c);
// console.log(t);

// // task 4--
// // Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
// function count_zero(x) {
//     let count =0;
//     for (i = 0; i<x.length; i++) {
//         if (x[i] === '0') {
//             count++;
//              }
        
//      }
//     return count;
// }
// const s = '100101111';
// const d = count_zero(s);
// console.log(d);


// task 5--
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(w) {
    if (w%2== 0) {
        return 'even';
        
        
    }
    else{
        return'odd';
        

    }

    
}
const c= 4;
const v =odd_even(c);
console.log(v);