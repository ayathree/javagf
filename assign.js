
// // task 5---

// function canPay(changeArray, totalDue) {
//     if (changeArray.length === 0) {
//         return "give a array";
        
//     }
//     let count = 0;
//     for(let item of changeArray){
        
//         count += item
//         if (count >= totalDue) {
//             return true
//         }
        
//     }
//     return false;
// }
// const a = [1,2,3,4,5,6];
// const c= 10
// const s= canPay(a, c);
// console.log(s);


// task 4---



// // task 3---

// function sortMaker(arr) {

//      if(arr[0] === arr[1]){
//         return 'equal';
//     }
//     else if(arr[0] > 0 && arr[1] > 0){
//         return arr.slice().sort((a, b) => b - a);
//     }
//     else if(arr[0] < 0 || arr[1] < 0){
//         return 'invalid input';
//     }
//     else{
//         return 'give a meaningful array';
//     }
// }
// const s =[4, -2];
// const a = sortMaker(s);
// console.log(a);


// // task 2--
// function matchFinder(string1, string2) {
//     if (typeof string1 !=='string' && typeof string2 !=='string' ) {
//         return 'please enter a valid string';
//     }
    
//         if(string1.indexOf(string2) !== -1){
//             return true;
//         }
//         else{
//             return false;
//         }
        
        
//     }

// const s ='John Doe';
// const e = 'ohn';
// const c = matchFinder(s,e);
// console.log(c);

// task 1
function cubeNumber(number) {
    const cube = number ** 3;
    return cube;
}
const s = 3;
const a = cubeNumber(s);
console.log(a);