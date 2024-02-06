// function min(array) {
//     let c = array[0];
//     for (let item of array) {
//         if (item < c) {
//             c = item;
            
//         }
        
//     }
//     return c;
// }
// const s = min([12,23,34,45,56,1,78])
// console.log(s);

// // task 2---
// // Find the friend with the smallest name.

// function small(friend) {
//     let c = friend[0];
//     for(i = 1; i < friend.length; i++){
//         if (friend[i].length < c.length) {

//             c = friend[i];
            
//         }
//     }
//     return c;
// }
// const s = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// const a = small(s);
// console.log(a)


// task 3--
// Your task is to calculate the total budget required to buy electronics:

// function calculateElectronicsBudget(number) {
//     const laptop = 35000;
//     const tablet = 15000 ;
//     const mobile = 20000 ;


//     const lap = number*laptop;
//     const tab = number*tablet;
//     const mob = number*mobile;

//     const total = lap+tab+mob;
//     return total;

    
// }

// const s =1;
// const a = calculateElectronicsBudget(s);
// console.log(a);


// // ---------------------------------

// const products =[
//     {name:'laptop', price: 35000, quantity:1},
//     {name:'tablet', price: 15000, quantity:2},
//     {name:'mobile', price: 20000, quantity:2},
// ]
// function name(products) {
//     let total=0;
//     for (let product of products ){
//         const thisProduct = product.price * product.quantity;
//         total+= thisProduct;
//     }
//     return total;
    
// }

//  const printAs = name(products);
//  console.log(printAs);

// // task 4--
// // You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.


// function findAveragePhonePrice(average) {
    
//     let total =0;
//     const number0fPhone = phones.length;
//     for (let item of phones) {
//         total+=item.price;
//     }
//     const avg = total/number0fPhone;
//     return avg;
    
    
// }
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// console.log(findAveragePhonePrice(phones))


// // // task 5
// // // For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
// function salary(x) {

//     let total =0;
//     for (let item of x) {
//         const payment = item.increment * item.experience ;
//         const addPay = payment+ item.starting;
//         total+=addPay;
//     }

//     return total;
// }
// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];
// console.log(salary(employees))

// // --------------------------------------
// function picnicBudget(number) {
//     // const equalOr100 = 
//     // const moreThan100OrEqualLessThan200 =
//     // const moreThan200 =
    

//     if (number <= 100) {
//         const equalOr100 = number*5000;
//         return equalOr100;
        
        
//     }
//     else if( number<=200){
//         const equalOr100 = 100*5000;
//          const moreThan100OrEqualLessThan200 = (number-100)*4000;
//          const total =moreThan100OrEqualLessThan200 + equalOr100;
//          return total; 
//     }
//     else{
//         const equalOr100= 5000*100;
//         const moreThan100OrEqualLessThan200 = 100*4000;
//         const thirdHalf = (number - 200)*3000;
//         const total1 = equalOr100+moreThan100OrEqualLessThan200+thirdHalf;
//         return  total1;
//     }
// }
// console.log(picnicBudget(202))