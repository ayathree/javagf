let num = 0;
while(num < 5){
    console.log('hello');
    num = num + 1;
}
// here hello printed 5 times. because i declare num = 0 and in the while expression i declare num have to less then 5. so when num = num + 1 = 0 + 1 = 1(hello), 1 + 1 = 2(hello), 2 + 1 = 3(hello), 3 + 1 = 4(hello), and at first for 0(hello) has printed.
// num = num + 1 can be written as num += 1, num ++

let numb = 50;
while(numb <=100){
    console.log(numb);
    numb++;
}

let number = 1;
let sum = 0;
while (number <= 10) {
    console.log(number);
    sum = sum + number;
    console.log('sum:', sum);
    number++;
    
}
// even number print
let a = 1;
while(a <= 10){
    console.log(a);
    if (a % 2 === 0) {
        console.log('even:', a);
        
    }
    a++;
}
// decrement
let n = 10;
while (n >= 0) {
    console.log(n);
    n--;

    
}


