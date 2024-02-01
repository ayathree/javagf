for(let i = 0; i <= 10; i ++){
    console.log('hello')

}
// odd
for(let i=1; i <= 10; i = i+2){
    console.log(i);
}
// even
for(let i=0; i <= 10; i = i+2){
    console.log(i);
}
// sum
let sum = 0;
for(let i=1; i <= 20; i++){
    console.log(i);
    sum = sum+i;
}
console.log('the sum of the numbers is', sum)
// decrement
// for(let i=1; i <= 10; i--){
//     console.log(i);
// }
for(let i=10; i >= 0; i--){
    console.log(i);
}
// print the total of the numbers which are divisible by 5
let total =0
for(i = 1; i <= 50; i++ ){
    if (i%5==0) {
        
        
        console.log(i)
        total = total + i;
    }
}
console.log('total',total)

