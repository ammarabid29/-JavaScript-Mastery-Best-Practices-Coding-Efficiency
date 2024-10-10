// Promises
function fetchData(isSuccess = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                const data = "Async Data";
                resolve(data);
            } else {
                const error = new Error("Async Operation Failed");
                reject(error);
            }
        }, 2000);
    });
}
fetchData(false)
    .then((result) => {
        console.log("Success: " + result);
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });



// Async / Await 
async function failedData() {
    try {
        const resultSuccess = await fetchData(false);
        console.log("Success: " + resultSuccess);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}
failedData();


