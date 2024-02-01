const a =[10, 20, 30, 40, 50, 100];
let maxNum = a[0];
let minNum = a[0];
for(i = 0; i<a.length; i++){
    const currentNum = a[i];
    if (currentNum > maxNum) {
        maxNum = currentNum;
        
    }
    if (currentNum < minNum) {
        minNum = currentNum;
        
    }
}
console.log(maxNum,minNum)

let str = "Mississippi";
console.log(str.indexOf("i", 3));

const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let prop in myObject) {
    console.log(myObject[prop]);
  }


  const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

const stu = "Hello";
stu[0] = "h";
console.log(stu);
