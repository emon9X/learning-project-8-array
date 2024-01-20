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

//Array.forEach(callback function(element, index, array))
//forEach method performs an operation on every element of an array based on a given callback function
//it doesn't return something explicitly
{
    const numbers = [45, 4, 9, 16, 25];
    const output = numbers.forEach(function showInLIne(x) {
        console.log(`this is ${numbers.indexOf(x) + 1} th element: ${x}`);
    })
    console.log(output);
}

//Array.map(function(element, index, array)) method
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

//Array.filter(function(element, index, array))
//creates new array of elements that pass the test

{
    const numbers = [45, 5, 6, 12, 18, 20, 31];
    const newArray = numbers.filter(number => number > 13);
    console.log(newArray);
}

//Array.reduce(function(total/initial value/previously returned value/, element, index, array))
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in the array.

{
    const numbers = [1, 2, 3, 6, 10];
    const sum = numbers.reduce((x, y) => {
        console.log(x, y);
        return x+y; //reduced to single value
    })
    console.log(sum);
}

//Array.reduce(function(total/initial value/previously returned value/, element, index, array))
//reduceRight() runs opposite direction of reduce() method

{
    const numbers = [1, 2, 3, 6, 10];
    const sum = numbers.reduceRight((x, y) => {
        console.log(x, y);
        return x+y; //reduced to single value
    })
    console.log(sum);
}

//Array.every(function(element, index, array))
//it e returns a boolean value
//if every element passes the test then it returns true

{
    const numbers = [45, 4, 9, 16, 25];
    const ifTrue = numbers.every(x => x < 45);
    console.log(ifTrue);
}

//Array.some(function(element, index, array))
//it e returns a boolean value
//if some of the elements pass the test then it returns true

{
    const numbers = [45, 4, 9, 16, 25];
    const ifTrue = numbers.some(x => x < 8);
    console.log(ifTrue);
}