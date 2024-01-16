const print = console.log
// creating array with new keyword 
{
    const array = new Array(40, 50, 60);
    print(array);
}

{
    const array = new Array(40);
    print(array);
}

//accessing array and array element
{
    //accessing full array
    const array = new Array(40, 50, 60);
    print(array);
}

{
    //accessing first array element
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[0];
    print(fruit);
}

{
    //accessing last array element
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[fruits.length - 1];
    print(fruit);
}

//how to change an array element
{
    const cars = ["Saab", "Volvo", "BMW"];
    print(cars);
    cars[0] = "Opel";
    print(cars);
}

//how to convert an array to string
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let stringedFruits = fruits.toString();
    print(stringedFruits);
}

//array properties
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.length;
    print(length); //returns the number of elements
}

//how to add new element to an array
{
    //by push() method
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
    print(fruits);
}
{
    //by length property
    const fruits = ["Banana", "Orange", "Apple"];
    fruits[fruits.length] = "Lemon";  // Adds a new element (Lemon) to fruits
    print(fruits);
}

//how does holes are created in an array
{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
    print(fruits);
}

//how to identify an array
{
    const fruits = ["Banana", "Orange", "Apple"];
    let type = typeof fruits;
    print(type);
    print(Array.isArray(fruits));
}

//array methods

/*
Basic Array Methods
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()

See Also:
Search Methods
Sort Methods
Iteration Methods	
*/

//Array.at(index) method
//this method is as same as accessing array element by index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.at(2); //same as fruits[2]
    print(fruit);
    print(fruits[-1]); //undefined. Unlike other programming languages, JavaScript doesn't support negative indexing
    //to solve this negative indexing problem use Array.at(index) method
    print(fruits.at(-1));
}

//Array.join("string separator")
//Array.join(number separator)
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    print(fruits.join()); //joins elements by comma(,)
    print(fruits.join("*")); //joins elements by asterisk(*), which is a string
    print(fruits.join(5)); //joins elements by 5, which is a number
}

//Array.pop() method
//this method actually changes the array
//this method returns the popped element
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let poppedFruit = fruits.pop();
    print(fruits);
    print(poppedFruit);
}

//Array.push() method
//push method returns the new length of the array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.push("Kiwi");
    print(fruits);
    print(length);
}

//Array.shift() method
//same as Array.pop() method
//it returns the first element whic is shifted out
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.shift();
    print(fruits);
    print(fruit);
}

//Array.unshift() method
//same as Array.push() method
//it returns the length of the new array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.unshift("Kiwi");
    print(fruits);
    print(length);
}

//delete
//Using delete() leaves undefined holes in the array.
//Use pop() or shift() instead.

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = delete fruits[0]; //makes Array[0] undefined
    print(fruits);
    print(fruits[0]);
}

//Array.concat(array)
//it creates new array
{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const newArray = myGirls.concat(myBoys);
    print(newArray);
}
{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);
    print(myChildren);
}
{
    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");
    print(myChildren);
}

//Array.copyWithin(copy at index, copy from index, to copy before index)
//The copyWithin() method overwrites the existing values.
//The copyWithin() method does not add items to the array.
//The copyWithin() method does not change the length of the array.
//this method actually changes the array

{
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
    //positiveIndex=   0          1        2        3        4       5
    //negativeIndex=   -6         -5       -4       -3       -2      -1
    print(fruits);
    // print(fruits.copyWithin(2, 4)); //copy at index 2 (Apple), copy from index 4 (Kiwi) to last 
    // print(fruits);
    // print(fruits.copyWithin(1, 2, 4)); //copy at index 1(Orange), copy from index 2(Apple), to index 3
    print(fruits.copyWithin(2, -3, -1))
}

//Array.flat() method
//Flattening an array is the process of reducing the dimensionality of an array.
//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
{
    const myArr = [[1, 2], [3, 4], [5, 6]];
    const newArr = myArr.flat();
    print(newArr);
}

//Array.splice(index at where elements will be added, how many elements will be deleted, new element 1, new element 2,...... )
// splice method adds new element in an array
//splice method also removes element from an array without creating holes (unlike delete keyword)
//it alters the main array
//splice method returns an array of deleted elements
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let addedFruits = fruits.splice(1,0, "Kiwi", "Papaya", "Lemon")
    // print(fruits);
    // print(addedFruits);
    let addedFruits2 = fruits.splice(1, 2, "Kiwi", "Papaya", "Lemon")
    print(fruits);
    print(addedFruits2);
}

//removing elements by splice method
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let removedFruits = fruits.splice(2, 2);
    print(fruits);
    print(removedFruits);
}

//Array.toSpliced() method
//safely removes elements from an array 
//it creates new array, keeping the main array unchanged
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let removedFruits = fruits.toSpliced(1, 2);
    print(fruits);
    print(removedFruits);
}

//Array.slice(start slicing at index, sliced elements before index)
//slice method creates new array. Keeps main array unchanged

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const sliced = fruits.slice(1);
    print(sliced);
    print(fruits);
}
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const sliced = fruits.slice(1, 4);
    console.log(sliced);
}

//Array search methods
/*
Array indexOf()
Array lastIndexOf()
Array includes()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()
*/

//Array.indexOf(element, search from index) method
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the index of the first occurrence.
//searching direction: from left to right []---------------->[]
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", NaN];
    console.log(fruits.indexOf("Apple"))
    console.log(fruits.indexOf("Apple", 2))
    console.log(fruits.indexOf("Apple", 4))
    console.log(fruits.indexOf("Apple", -3))
    console.log(fruits.indexOf("Apple", -1))
    console.log(fruits.indexOf(NaN)); //why does it returns -1, though the array includes NaN.
}

//Array.lastIndexOf(element, search from index) 
//It returns the index of last occurrence
//searching direction: from right to left []<------------------[]

{
    const num = [1, 2, 3, 4, 2, 4, 3, 1, NaN];
    console.log(num.lastIndexOf(1));
    console.log(num.lastIndexOf(2, 2));
    console.log(num.lastIndexOf(2));
    console.log(num.lastIndexOf(2, -8));
    console.log(num.lastIndexOf(2, -6));
}

//Array.includes(element)
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", NaN];
    console.log(fruits.includes("Mango"));
    console.log(fruits.includes(NaN));
}

//Array.find(function)
//it returns the first value/ first occurrence on the basis of the given condition
//searching direction: from left to right []---------------->[]
{
    const numbers = [42, 30, 28, 98, 54];
    let number = numbers.find(x => x < 54); //first occurrence is 42
    console.log(number);
    let number2 = numbers.find(x => x < 100); //first occurrence is 42 
    console.log(number2);
}

{
    const numbers = [42, 30, 28, 98, 54];
    let number = numbers.find(function myNumber(x) {
        return x < 54
    })
    console.log(number);
}

{
    const numbers = [42, 30, 28, 98, 54];
    let number = numbers.find(myfunction);
    console.log(number);
    function myfunction(x) {
        return x < 54
    }
}

//Array.findIndex(function)
//it returns the index of first value/ first occurrence on the basis of the given condition
//searching direction: from left to right []---------------->[]
{
    const numbers = [42, 30, 28, 98, 54];
    let number = numbers.findIndex(x => x < 54); //first occurrence is 42
    console.log(number);
    let number2 = numbers.findIndex(x => x < 100); //first occurrence is 42 
    console.log(number2);
}

{
    const numbers = [42, 30, 28, 98, 54];
    let number = numbers.findIndex(function myNumber(x) {
        return x < 54
    })
    console.log(number);
}

{
    const numbers = [42, 30, 28, 98, 54];
    let number = numbers.findIndex(myfunction);
    console.log(number);
    function myfunction(x) {
        return x < 54
    }
}

//Array.findLast(function)
//it returns the first value/ first occurrence on the basis of the given condition by searching from end to start
//searching direction: from right to left []<------------------[]
{
    const temp = [27, 28, 30, 40, 42, 41, 30];
    let h = temp.findLast(x => x > 40)
    console.log(h);
}

//Array.findLastIndex(function)
//it returns the index of first value/ first occurrence on the basis of the given condition by searching from end to start
//searching direction: from right to left []<------------------[]
{
    const temp = [27, 28, 30, 40, 42, 41, 30];
    let h = temp.findLastIndex(x => x > 40)
    console.log(h);
}

//Array sort method

/*
Alpabetic Sort

Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects
*/

//Array.sort() method
//The sort() method sorts an array alphabetically
//it changes the main array

{
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot"];
    console.log(fruits.sort());
}

//Array.reverse()
//it changes the main array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot"];
    console.log(fruits.sort().reverse()); //reverse sorting
}

//Array.toSorted()
//it keeps the original array unchanged

{
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot"];
    const sortedFruits = fruits.toSorted();
    console.log(sortedFruits);
    console.log(fruits);
}

//Array.toReversed()
//it keeps the original array unchanged
//Array.toSorted()
//it keeps the original array unchanged

{
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot"];
    const sortedFruits = fruits.toSorted().toReversed();
    console.log(sortedFruits);
    console.log(fruits);
}

/*
Numeric sort

Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()
*/

//Array.sort()
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.

{
    const numbers = [25, 100, 65, 105, 205, 98, 9, 8];
    console.log(numbers.toSorted()); //sorted alphabetically not numerically
}

//to solve this problem an compare function must be provided

{
    const numbers = [25, 100, 65, 105, 205, 98, 9, 8];
    console.log(numbers.toSorted(function (a, b) { return a - b })); //sorting in ascending order

    {
        //how does it work
        const newArray = [...numbers];
        for (let k = 0; k < numbers.length - 1; k++) {
            for (let i = 0; i < numbers.length - 1; i++) {
                if (newArray[i] - newArray[i + 1] > 0) {
                    let a
                    a = newArray[i];
                    newArray[i] = newArray[i + 1];
                    newArray[i + 1] = a;
                }
            }
        }
        console.log(newArray)
    }
    console.log(numbers.toSorted(function (a, b) { return b - a })); //sorting in descending order
}

//Array elements random placing
//Array.sort(function(){return 0.5 - Math.random()})

{
    const numbers = [25, 100, 65, 105, 205, 98, 9, 8];
    console.log(numbers.sort(function () { return 0.5 - Math.random() })); //not accurate method
}

//The Fisher Yates Method
{
    const points = [40, 100, 1, 5, 25, 10];

    for (let i = points.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    }
    console.log(points)
}

// Find the Lowest (or Highest) Array Value
// To find the lowest or highest value you have 3 options:

// #Sort the array and read the first or last element
// #Use Math.min() or Math.max()
// #Write a home made function

// finding maximum and minimum by sorting 

{
    const numbers = [25, 100, 65, 105, 205, 98, 9, 8];
    const sortedNumbers = numbers.toSorted((a, b) => a - b);
    const min = sortedNumbers[0];
    const max = sortedNumbers[numbers.length - 1];
    console.log("min: ", min, " ", "max: ", max)
    console.log(sortedNumbers);
}

// Math.min(), Math.max() method

{
    const numbers = [25, 100, 65, 105, 205, 98, 9, 8];
    console.log(Math.min.apply(null, numbers));
    console.log(Math.max.apply(null, numbers));
}

//find max and min by home made function
{
    function max(array) {
        let maxValue = [0];
        for (let number of array) {
            if (number >= maxValue[0]) {
                maxValue[0] = number
            }
        }
        return maxValue[0];
    }

    const numbers = [25, 100, 65, 105, 205, 98, 9, 8];
    console.log(max(numbers));

}


//sortin array object elements
{
    const myArr = [
        { name: "X00", price: 200 },
        { name: "X01", price: 100 },
        { name: "X02", price: 180 },
        { name: "X03", price: 120 },
        { name: "X04", price: 190 },
        { name: "X05", price: 110 },
        { name: "X06", price: 110 },
        { name: "X07", price: 110 },
        { name: "X08", price: 120 },
        { name: "X09", price: 120 },
        { name: "X10", price: 126 },
        { name: "X11", price: 120 },
        { name: "X12", price: 130 },
        { name: "X13", price: 139 },
        { name: "X14", price: 130 },
        { name: "X15", price: 130 },
        { name: "X16", price: 140 },
        { name: "X17", price: 150 },
        { name: "X18", price: 140 },
        { name: "X19", price: 170 }
    ];

    console.log(myArr.toSorted((a, b) => a.price - b.price))

}

