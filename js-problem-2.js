function min(array) {
    let c = array[0];
    for (let item of array) {
        if (item < c) {
            c = item;
            
        }
        
    }
    return c;
}
const s = min([12,23,34,45,56,1,78])
console.log(s);