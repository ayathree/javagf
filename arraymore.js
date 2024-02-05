// for----
// const arr = [12, 34, 45, 56, 67, 78, 89];
// for(let item of arr){
//     console.log(item);
// }


const arr = [12, 34, 56, 78, 90];
// for(i = 0; i <arr.length; i++){
//     console.log(arr[i]);
// }

// while---
let i = 0;
while (i <arr.length) {
    // console.log(arr[i]);
    i++;
    
}

// reverse----

const a =[12,34,56,78,90,21,43,65,87];
// a.reverse();
// console.log(a);

// const rev_a=[];
// for(i = 0;i<a.length;i++){
//     const b = a[i];
    // rev_a.unshift(b);----this rule use for revers item
    // rev_a.push(b);---this rule use for similar item
    
// }
// console.log(rev_a);

// sorting----

// ascending--
const acsNum = [...a].sort(function (a ,b) { 
    return(a -b)
    // [...a] is for not copy the value which print.by using this term acsNum and dscNum will print properly in same time by using console.log
});
console.log(acsNum);

// descending---

const dscNum = [...a].sort(function (a ,b) { 
         return(b - a)
     });
    console.log(dscNum);




    const s = [];
    for(let item of s){

        console.log(typeof(item));
    }