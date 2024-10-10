// Types of Errors 
// 1. Syntax error 
// 2. Reference Error: by not defining a function or variable 
// 3. Type Error: treating variable as function or function as variable 
// 4. Range Error: unavaible range of array 
// 5. Logical Errors 
// 6. Custom Error: create own errors 
// class myCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "myCustomMessage";
//     }
// }
// const customError = new myCustomError("This is a Custom Error");
// throw customError;

console.error("This is a error message");
console.warn("This is a warning message");
console.group("Label 1");
console.log("Message 1");
console.log("Message 2");
console.log("Message 3");
console.groupEnd();

const data = [{ name: "Ammar", age: 22 }, { name: "Abid", age: 55 }];
console.table(data);
console.timeEnd("Timer");
console.clear();