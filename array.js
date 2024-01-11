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