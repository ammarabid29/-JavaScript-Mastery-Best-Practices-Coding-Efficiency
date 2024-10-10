// Using Promises
function fetchUserData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)  // Fetching user data
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();  // Parsing response as JSON
            })
            .then(data => {
                resolve(data);  // Resolve with the user data
            })
            .catch(error => {
                reject("Error Fetching Data: " + error);  // Handle errors
            });
    });
}

// Process and display user data
function displayUserData(users) {
    users.forEach(user => {
        console.log("ID: ", user.id);
        console.log("Name: ", user.name);
        console.log("Username: ", user.username);
        console.log("Email: ", user.email);
        console.log("--------------------------");
    });
}

// API endpoint
const api = "https://jsonplaceholder.typicode.com/users";

// Fetching user data and displaying it
fetchUserData(api)
    .then(displayUserData)
    .catch(error => console.log(error));
