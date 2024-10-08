
// Object 
let data = {
    name: "Ammar",
    age: 22,
    email: "aammarawan786@gmail.com",
}
data.city = "Sargodha"; // add in object
// delete data.age;        // delete from object
// console.log(data.name);
// console.log(data.age);
// console.log(data.email);
// console.log(data.city);
// console.log(data);
// console.log(Object.keys(data));     // keys of object
// console.log(Object.values(data));   // values of object
// console.log(Object.entries(data));   // each key-value of object



// Array
let fruits = ["Apple", "Banana", "Mango", "PineApple"];
// fruits.shift();                         // delete first item
// fruits.pop();                           // delete last item
// fruits.unshift("Grapes");               // add item on first
// fruits.push("Grapes");                  // add item in last

// let indexCheck = fruits.indexOf("Banana");  // check position of value
// console.log(indexCheck);

// let slice = fruits.slice(1, 4);         // slice from a to b position
// console.log(slice);

// console.log(fruits.length);             // length of array
// console.log(fruits);                    // all values in array
// console.log(fruits[0]);                 // value at index[]

let numbers = [1, 5, 8, 10, 15];
let filterNumbers = numbers.filter(    // extract values from array through filter
    function (element) {
        return element > 8;
    }
);
console.log(filterNumbers);
 