// API: Application Programming Interface 
async function fetchData(url, userID) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        processFetchData(data, userID);
    } catch (error) {
        console.log("Error Fetching Error:" + error);
    }
}
function processFetchData(data, userID) {
    // console.log("Fetch Data: ", data);
    const user = data.data.find(user => user.id === userID);
    if (user) {
        console.log(`Details of user with id is ${userID}`, user);
    } else {
        console.log(`User with id ${userID} is not found`);
    }
}
const api = "https://reqres.in/api/users";
const userData = 1;
fetchData(api, userData);
