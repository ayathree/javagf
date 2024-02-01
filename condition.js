var applePrice = 300;
if(applePrice > 800){
    console.log('i will buy orange')
}
else{
    console.log('i will buy apple')
}
// multiple  condition
const height = 60;
const weight = 50;
const salary = 1000000;
const country = 'germany';
if(height>60 && weight < 50){
    console.log('you are best');
}
else{
    console.log("you are not best")
}

if(height == 60 || country == 'banglades'){
    console.log('you are best')
}
else{
    console.log("you are not best")
}
if((country == 'germany' && salary <1000000) || weight== 50){
    console.log("you are best");
}
else{
    console.log("you are not best")
}
if((country == 'germany' && salary <1000000) && weight== 50){
    console.log("you are best");
}
else{
    console.log("you are not best")
}
if((country == 'germany' || salary <1000000) && weight== 50){
    console.log("you are best");
}
else{
    console.log("you are not best")
}
// if else if else
const buyLipstick = 5;
const buyEyeliner = 7;
const price = 1000;
if(buyLipstick >=2){
    const discount = price*5/100;
    const payAmount = price-discount;
    console.log(payAmount);
    
}
else if( buyEyeliner >= 3){
    const discount = price*7/100;
    const payAmount = price-discount;
    console.log(payAmount);

}
else{
    console.log(price)
}
// grade

const number = 20;
const m = "you got average number";
const aPlus = "you got a plus";
const fail = "you got fail";
if(number>= 80){
    console.log(aPlus)
}
else if(number<30){
    console.log(fail)
}
else{
    console.log(m)

}
// ternary operator
let age = 12;
age >=18 ? console.log("eligible for vote") : console.log('not eligible for vote');
// logical not (!)
const isPassed = true;
if(isPassed){
    console.log('keep it up');
}
else{
    console.log('you have to give your best');
}


const isPass = true;
if(!isPass){
    console.log('keep it up');
}
else{
    console.log('you have to give your best');
}

const isPas = false;
if(!isPas){
    console.log('keep it up');
}
else{
    console.log('you have to give your best');
}



const isDo = false;
if(!!isDo){
    console.log('keep it up');
}
else{
    console.log('you have to give your best');
}


let result = 10 < "5";
console.log(result);



let score = 75;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
console.log(grade);
 


 

