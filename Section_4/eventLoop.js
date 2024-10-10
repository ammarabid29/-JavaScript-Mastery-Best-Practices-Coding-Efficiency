// Call Stack 
// Callback Queue
// Execute Syncronous Code
// Check for Callback
// Dequeue Callback 
// Execute Callback 
// Repeat 

// Syncronous 
// Syncronous means one after the other, until one command is complete the next won't start
console.log("1. Syncronous Code starts.");
console.log("2. Syncronous Code continous.");
console.log("3. Syncronous Code ends.");

// Asyncronous 
setTimeout(() => {
    console.log("4. Callback from setTimeout after 5000ms.");
}, 5000);

// Asyncronous means start all tasks at once and provide the answer of whichever completes first
function fetchData(callback) {
    setTimeout(() => {
        const data = "Async Data";
        callback(data)
    }, 4000);
}
fetchData((result) => {
    console.log(result);
});
