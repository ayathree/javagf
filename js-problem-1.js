// // task1--
// // Write a function to convert temperature from Celsius to Fahrenheit.

// function convert(e) {
//     const calc = (e*1.8)+32;
    
//     return calc;
    
// }
// const c = 77;
// const calc = convert(c);
// console.log(calc);


// // task 2--
// // You are given an array of numbers. Count how many times the a number is repeated in the array.

// function repeated(array, find) {
//     let count = 0;
    
    
//     for (let item of array) {
//         if (item === find) {
//             count++;
            
//         }
      
//     }


//     return count;
    
// }
// const s = [12,23,34,45,56,67,78,23,23]
// const d = 23;
// const x = repeated(s , d);
// console.log(x)


// // task 3--
// // Write a function to count the number of vowels in a string.


// function str(w) {
//     const vowel = 'aeiou';
//     count = 0;
//     for (let item of w ) {
//         if(vowel.includes(item) === true){
//             count ++;
//         }
        
        
//     }
//     return count;
// }

// const d = 'werdftghyujiko'
// const s = str(d);
// console.log(s);

// // task 4--
// // Write a function to find the longest word in a given string.

// function findLongestWord(inputString) {
//     const words = inputString.split(' ');
//     let longestWord = ' ';

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// // Example usage:
// const inputString = "I am learning Programming to become a programmer";
// const result = findLongestWord(inputString);

// console.log(result);


// // task 5--
// // Generate a random number between 10 to 20.

// console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10));
// -----------------------------------------------------
// In this example:

// Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// (20 - 10 + 1) determines the range size (11 in this case).
// Math.floor() rounds down the result to the nearest integer.
// + 10 shifts the range to start from 10.
// The randomNumber variable will contain a random integer between 10 and 20 (inclusive), and it will be logged to the console.
// --------------------------------------------------------

// // Generate a random number between 20 to 30.
// console.log(Math.floor(Math.random() * (30 - 20 + 1) + 20));


// // find out the min number from a array----
// function min(array) {
//     let e = array[0];
//     for (let item of array) {
//         if (item < e) {
//             e = item;
//         }
        
//     }
//     return e;
    
// }
// const s =[12,89,90,45,67,45,8,200,456,34];
// const x = min(s);
// console.log(x);

// find out the expensive phone from many phones-----
const phones = [
    {name: 'Oppo', price: 15000},
    {name: 'Samsung', price: 20000},
    {name: 'Iphone', price: 100000},
    {name: 'Xaomi', price: 10000},
]

function expensive(phones) {

    let c = phones[0];
    for (const phone of phones ) {
        if (phone.price > c.price) {
         c = phone;
        
        }
        
    }
    return c;
    
}

const g = expensive(phones);
console.log(g)




const a =0 ;
console.log(typeof(a));

