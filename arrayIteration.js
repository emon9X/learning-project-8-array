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
        return x + y; //reduced to single value
    })
    console.log(sum);
}

//Array.reduce(function(total/initial value/previously returned value/, element, index, array))
//reduceRight() runs opposite direction of reduce() method

{
    const numbers = [1, 2, 3, 6, 10];
    const sum = numbers.reduceRight((x, y) => {
        console.log(x, y);
        return x + y; //reduced to single value
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

//Array.from(array, mapFunction, thisArg )
//The Array.from() method returns an Array object from any object with a length property or any iterable object.


//returning an array object from string as string has length property

{
    const name = "Ron DeSantis";
    const array = Array.from(name);
    console.log(array);
}

//returning a new array from an array after some operation

{
    const numbers = [5, 2, 6, 2, 4];
    const newArray = Array.from(numbers, x => x - 2);
    console.log(newArray);
}

//returning a new array from an array after some operation using thisArg parameter

{
    const numbers = [5, 2, 6, 2, 4];
    const newArray = Array.from(numbers, subtraction, { reduce: 2 });

    function subtraction(x) {
        return x - this.reduce
    }
    console.log(newArray);
}


//Array.keys()
//returns array iterator object
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();
    console.log(keys);
    //here keys is an array. Its elements are indexes of the main array.
    for (let x of keys) {
        console.log(x);
    }
}

//Array.entries()
//returns key value pair
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const pairs = fruits.entries();
    console.log(pairs);
    for (let x of pairs) {
        console.log(x);
    }
}

//Array.with(index, replacing value)
//safely updates elements of an array
{
    const months = ["Januar", "Februar", "Mar", "April"];
    const newMonths = months.with(2, "March");
    console.log(months);
    console.log(newMonths);
}

//array spread(...)
//copies array

{
    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];

    const newArray = [...q1,...q2,...q3,...q4];
    console.log(newArray);
}