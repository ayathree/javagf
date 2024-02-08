// function calculateMoney(ticketSale) {
//     if (ticketSale < 0) {
//         return 'Invalid Number';
        
//     }
//     const calculation = ( ticketSale * 120) - ( 500 + (8 * 50) );
//     return calculation;
// }



// function checkName(name) {
//     if (typeof name !=='string' || !isNaN(name)) {
//         return 'invalid';   
//     }
//     const searchLetter = ['A','Y','I','E','O','U','W','a','y','i','e','o','u','w'];
//     const lastLetter = name[name.length - 1];
//     if (searchLetter.includes(lastLetter)) {
//         return 'Good Name';   
//     }
//     else{
//         return 'Bad Name';
//     }   
// }



// function deleteInvalids(array) {
//     if (Array.isArray(array) ) {
//         let result =[];
//         for (let item of array) {
//             if (typeof item ==='number' &&  !isNaN(item) ) {
//                 result.push(item);    
//             }
//         }
//         return result;    
//     }
//     else{
//         return 'Invalid Array';
//     }
// }



// function password(obj) {
//     if (obj.siteName == undefined || obj.name == undefined  || obj.birthYear == undefined) {
//         return 'invalid';    
//     }
//     const number = obj.birthYear.toString();
//     if (number.length !== 4) {
//         return 'invalid';    
//     }
//     const passOne = obj.siteName[0].toUpperCase()+obj.siteName.slice(1);
//     const passTwo = obj.name;
//     const passThree = obj.birthYear;

//     return `${passOne}#${passTwo}@${passThree}`;
// }



function monthlySavings(arr , livingCost) {
    if ( typeof livingCost !== 'number') {
        return 'invalid input';   
    }
    if (Array.isArray(arr)) {
        let total = 0;
        for (let item of arr) {
        if (item >= 3000) {
        const payment = item-(item*20/100);
        total += payment;
        } 
        else{
        total += item;
        }
      }  
      const savings = total-livingCost;
        if (savings < 0) {
        return 'earn more';
      }
        return savings ; 
    }
    else{
    return 'invalid input';
    }
}











