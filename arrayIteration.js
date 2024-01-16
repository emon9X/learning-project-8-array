//Array iteration method\
/*
Array forEach()
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRigth()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)
*/

//Array.forEach(callback function)
//forEach method performs an operation on every element of an array based on a given callback function
//it doesn't return something explicitly
{
    const numbers = [45, 4, 9, 16, 25];
    const output = numbers.forEach(function showInLIne(x) {
        console.log(`this is ${numbers.indexOf(x) + 1} th element: ${x}`);
    })
    console.log(output);
}

//Array.map(function) method
//it creates new array. That means it returns an array unlike forEach method
{
    const numbers = [1, 4, 9, 16, 25, 36];
    const root = numbers.map(x => Math.pow(x, .5));
    console.log(root);
}

//Array.flatMap(function
//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
{
    const words = ["hello", "world"];
    const letters = words.flatMap(word => word.split(''));
    console.log(letters);
    const latter = words.map(word => word.split(''))
    console.log(latter);
}