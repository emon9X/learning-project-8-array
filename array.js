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