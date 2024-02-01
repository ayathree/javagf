
// task 1
const burger = 1000;
if(burger > 500){
    console.log("free one cock for you");
}
else{
    console.log('you have to buy a cock in 30 tk');
}
// task 2
let weight = 80;
let height = 1.63;
let  BMI = weight / (height ** 2);


if(BMI < 18.5){

     
    console.log('you are underweight')
}
else if( BMI >= 18.5 && BMI <=24.9){
    
    console.log('you are normal')
}
else if(BMI >=25 && BMI <= 29.9){

    console.log(' you are overweight')
}
else{
    console.log('you are obese')
}
// 
// let bMi = 19.5;
// if(bMi < 18.5){
//     console.log('you are underweight')
// }
// else if( bMi >= 18.5 && bMi <=24.9){
//     console.log('you are normal')
// }
// else if(bMi >=25 && bMi <= 29.9){
//     console.log(' you are overweight')
// }
// else{
//     console.log('you are obese')
// }
// task 3
let number = 30;
if(number >= 90){
    console.log('Grade: A')
}
else if(number>= 80 && number <=89){
    console.log('Grade: B')
}
else if(number>= 70 && number <=79){
    console.log('Grade: C')
}
else if(number>= 60 && number <=69){
    console.log('Grade: D')
}
else{
    console.log('Grade: F')
}
// task 4
let myNumber = 70;
let friendNumber = 60;
if(myNumber >= 80){
    if(friendNumber >= 80){
        console.log("go for a lunch")
    }
    else if(friendNumber >= 60 && friendNumber<80){
        console.log("good luck for next time")
    }
    else if(friendNumber >= 40 && friendNumber<60){
    console.log("unseen message")
    }
    else {
        console.log('no problem')
    }

}
else{
    console.log('go to sleep')

}
// task 5
let num1 = 70;
let num2 = 80;
if(num1 > num2){
    let result = num1 ** 2;
     console.log(result)
}
else{
    let result = num1 + num2;
     console.log(result)
}
//ternaryS
 let number1 = 90 ;
 let number2 = 80;
 const result1 = number1**2;
 const result2 = number2 + number1;
  number1> number2 ? console.log(result1) : console.log( result2);
    
//  
const score = 80

const scoreRating =
  score > 70 ? "Excellent" : "Do better"

console.log(scoreRating)
// task 6
let age = 9;
const price = 800;
if(age <= 10){
    console.log('free ticket')
}
else if(age == 'student'){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(age >= 60){
    const discount = price * 15 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}




