// task 1--

// let count = 0;
// let str = "nobanita ayathree";
// let query = "a";
// for(let i = 0;i < str.length; i++) {
//     if( str[i] === query ) {
//         count++;
//     }
// }
// console.log(count);

// task 2--

// let count = 0;
// let str = "Nobanita Ayathree";
// let query1 = "a";
// let query2 = "A";
// for(let i = 0;i < str.length; i++) {
//     if( str[i] === query1 || str[i] === query2 ) {
//         count++;
//     }
// }
// console.log(count);

// extra task --count all the vowel in a string--

// let count = 0;
// let str = "Words that contain short vowels include: bat, cat, bed, leg, but, bug, bog, hip, pop and sip";
// let query = "aeiouAEIOU";

// for(let i = 0;i < str.length; i++) {
//     // if(query.indexOf(str[i]) == 1) ---- this will check that the number of vowel e. because the value of the index num of 1 in the query variable is "e". so the code will execute 4.
//     if(query.indexOf(str[i]) !== -1) {
//         count++;
//     }
// }
// console.log(count);

// task 3--

// Check whether a string contains all the vowels a, e, i, o, u




    




// let str = "dfghjklerfghjk";
// const query = "aeiou";

//     for(let char of query) {
        
//         if (str.indexOf(char) === -1) {
//             console.log('no vowel have');
            
//         }
//         else{

//             console.log('yes vowel have');
//         }
//     }

// task 4---

// let input = 'sdrftgyhujx'
// let result= input.replace('x','y');
// console.log(result)
    
// task 4/1---

// let input = 'sdrftgyhujX'
// let result= input.replace('X','Y');
// console.log(result)


// task 5--

let word = 'freecodecamp is very good'; 
let words = word.split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

let capitalizedWord = words.join(' ');

console.log(capitalizedWord);




    


