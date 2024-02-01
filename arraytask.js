// task 1
const numbers = ['apple', 'orange', 'banana', 'guava', 'lichi'];
console.log(numbers);
console.log(numbers[3]);
numbers[2] = 'jumbura';
console.log(numbers)

// task 2
const destination = ['germany', 'france', 'greece'];
console.log(destination)
destination.push('austria');
console.log(destination)
destination.push('norway', 'spain');
console.log(destination)
destination.pop();
console.log(destination)

// task 3
const books =['book1', 'book2', 'book3', 'book4']
console.log(books)
console.log(books.includes('book4'))

if(books.includes('book4')){
    console.log('element is present in the array')
}
else{
    console.log('element is not present in the array')
}


// task 4
food =['burger', 'biryani', 'cookies', 'pizza'];
zero = 'string';
console.log(Array.isArray(food))
console.log(Array.isArray(zero))

if(Array.isArray(food) || Array.isArray(zero)){
    console.log('food variable is a array and zero variable is not a array')
}
else{
    console.log('both are array')
}


// task 5
const pink = ['a', 's','d', 'f','g'];
const black = ['z', 'x', 'c', 'v', 'b'];
console.log(pink.concat(black))
var w = pink.concat(black);
console.log(pink , black, w)
