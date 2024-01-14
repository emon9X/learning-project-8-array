// creating array with new keyword 
{
    const array = new Array(40, 50, 60);
    console.log(array);
}

{
    const array = new Array(40);
    console.log(array);
}

//accessing array and array element
{
    //accessing full array
    const array = new Array(40, 50, 60);
    console.log(array);
}

{
    //accessing first array element
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[0];
    console.log(fruit);
}

{
    //accessing last array element
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[fruits.length - 1];
    console.log(fruit);
}

//how to change an array element
{
    const cars = ["Saab", "Volvo", "BMW"];
    console.log(cars);
    cars[0] = "Opel";
    console.log(cars);
}

//how to convert an array to string
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let stringedFruits = fruits.toString();
    console.log(stringedFruits);
}

//array properties
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.length;
    console.log(length); //returns the number of elements
}

//how to add new element to an array
{
    //by push() method
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
    console.log(fruits);
}
{
    //by length property
    const fruits = ["Banana", "Orange", "Apple"];
    fruits[fruits.length] = "Lemon";  // Adds a new element (Lemon) to fruits
    console.log(fruits);
}

//how does holes are created in an array
{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
    console.log(fruits);
}

//how to identify an array
{
    const fruits = ["Banana", "Orange", "Apple"];
    let type = typeof fruits;
    console.log(type);
    console.log(Array.isArray(fruits));
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
    console.log(fruit);
    console.log(fruits[-1]); //undefined. Unlike other programming languages, JavaScript doesn't support negative indexing
    //to solve this negative indexing problem use Array.at(index) method
    console.log(fruits.at(-1));
}

//Array.join("string separator")
//Array.join(number separator)
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.join()); //joins elements by comma(,)
    console.log(fruits.join("*")); //joins elements by asterisk(*), which is a string
    console.log(fruits.join(5)); //joins elements by 5, which is a number
}

//Array.pop() method
//this method actually changes the array
//this method returns the popped element
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let poppedFruit = fruits.pop();
    console.log(fruits);
    console.log(poppedFruit);
}

//Array.push() method
//push method returns the new length of the array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.push("Kiwi");
    console.log(fruits);
    console.log(length);
}

//Array.shift() method
//same as Array.pop() method
//it returns the first element whic is shifted out
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.shift();
    console.log(fruits);
    console.log(fruit);
}

//Array.unshift() method
//same as Array.push() method
//it returns the length of the new array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.unshift("Kiwi");
    console.log(fruits);
    console.log(length);
}

//delete
//Using delete() leaves undefined holes in the array.
//Use pop() or shift() instead.

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = delete fruits[0]; //makes Array[0] undefined
    console.log(fruits);
    console.log(fruits[0]);
}

//Array.concat(array)
//it creates new array
{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const newArray = myGirls.concat(myBoys);
    console.log(newArray);
}
{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);
    console.log(myChildren);
}
{
    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");
    console.log(myChildren);
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
    console.log(fruits);
    // console.log(fruits.copyWithin(2, 4)); //copy at index 2 (Apple), copy from index 4 (Kiwi) to last 
    // console.log(fruits);
    // console.log(fruits.copyWithin(1, 2, 4)); //copy at index 1(Orange), copy from index 2(Apple), to index 3
    console.log(fruits.copyWithin(2, -3, -1))
}

//Array.flat() method
//Flattening an array is the process of reducing the dimensionality of an array.
//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
{
    const myArr = [[1, 2], [3, 4], [5, 6]];
    const newArr = myArr.flat();
    console.log(newArr);
}

//Array.splice(index at where elements will be added, how many elements will be deleted, new element 1, new element 2,...... )
// splice method adds new element in an array
//splice method also removes element from an array without creating holes (unlike delete keyword)
//it alters the main array
//splice method returns an array of deleted elements
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let addedFruits = fruits.splice(1,0, "Kiwi", "Papaya", "Lemon")
    // console.log(fruits);
    // console.log(addedFruits);
    let addedFruits2 = fruits.splice(1,2, "Kiwi", "Papaya", "Lemon")
    console.log(fruits);
    console.log(addedFruits2);
}

//removing elements by splice method
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let removedFruits = fruits.splice(2, 2);
    console.log(fruits);
    console.log(removedFruits);
}

//Array.toSpliced() method
//safely removes elements from an array 
//it creates new array, keeping the main array unchanged
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let removedFruits = fruits.toSpliced(1,2);
    console.log(fruits);
    // console.log(removedFruits);
}