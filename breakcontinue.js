for(let i = 1; i <=50; i++){
    if(i%2 ==1){
        continue;
    }
    console.log(i);
}
// break
for(let i = 1; i <=50; i++){
    console.log(i);
    if(i > 25){
        break;
    }
}
// for this output will be 1-26
for(let i = 1; i <=50; i++){
    if(i > 25){
        break;
    }
    console.log(i);
}
//for this output will be 1-25 

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}