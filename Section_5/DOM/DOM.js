// document object model 

// 4 Pillers: 
// 1. Selection of HTML 
// 2. Changing HTML 
// 3. Changing CSS 
// 4. Event Listener 

let x = document.querySelector("h1");
x.innerHTML = 'Hello World!';
// x.style.color = "white";
// x.style.backgroundColor = "black";
// console.log(x);

let myElement = document.getElementById("myElement");
myElement.id = "newElement";
console.log((myElement.id));
