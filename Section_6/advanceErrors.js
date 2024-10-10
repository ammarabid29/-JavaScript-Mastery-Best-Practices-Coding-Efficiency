
// 1. Aysncronous Error 
// async function simulateAsyncError() {
//     try {
//         throw new Error("Simulated Aysncronous Error");
//     }
//     catch (error) {
//         return Promise.reject(error);
//     }
// }
// simulateAsyncError().catch(error => console.log("catch error", error));

// 2. Network Error / Api data fetching error
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network Response was not ok");
        }
        return response.json;
    })
    .then(data => {
        console.log("Data from the api", data);
    })
    .catch(error => {
        console.log("Network Error", error);
    });
