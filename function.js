// function add(num1, num2){
//     console.log(num1, num2);
//     const sum = num1+num2;
//     console.log(sum);
// }
// add(4, 5);


// function number(num1){
//     console.log(num1);
//     const b = num1*num1;
//     console.log(b);
// }
// number(4);

//  many variable declaration in function(1st process)-----
// function number(x){
//     const y = x*2;
//     console.log(x, y);
// }

// number(3);
// number(12)
// number(889)
// // second process-----
// function number(x, y){
//     const c = x+y;
//     console.log(x, y, 'sum is:', c);
// }
// const firstNum = 59;
// const secondNum = 60;
// number(firstNum, secondNum)


// return-----
// function a(x){
//     const y = x+10;
//     return y;
// }
// a(7)
// const u=a(7);
// console.log(u);


// // conditional function----

// function isEven(x){
//     if(x%2===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(8));


function math(num1, num2) {
    const sum = num1 + num2;
    const mull = sum * 2;
    const div =mull/6;
    return div;
}
const f = 98
const y = 56
const c = math(98, 56);
console.log( f,y,c)


