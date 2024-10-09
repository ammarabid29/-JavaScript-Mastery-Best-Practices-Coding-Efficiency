// Using Async/Await
async function fetchUserData(url) {
    try {
        const response = await fetch(url);  // Fetching user data
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();  // Parsing response as JSON
        return data;  // Return the user data
    } catch (error) {
        console.log("Error Fetching Data: " + error);  // Handle errors
    }
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
(async () => {
    const users = await fetchUserData(api);
    if (users) {
        displayUserData(users);
    }
})();
