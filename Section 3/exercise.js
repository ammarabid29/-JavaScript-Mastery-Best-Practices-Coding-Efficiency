let users = [];

function addUser(name, age, isActive, hobbies) {
    let userData = {
        name: name,
        age: age,
        isActive: isActive,
        hobbies: hobbies,
    };
    users.push(userData);
    console.log("User Added Successfully");
}

function updateUser(name, field, value) {
    let user = users.find(user => user.name === name);

    if (!user) {
        console.log("User not found");
        return;
    }

    if (field === "name") {
        user.name = value;
        console.log("Name updated successfully!");
    } else if (field === "age") {
        if (typeof value === "number") {
            user.age = value;
            console.log("Age updated successfully!");
        } else {
            console.log("Invalid value for age");
        }
    } else if (field === "isActive") {
        if (typeof value === "boolean") {
            user.isActive = value;
            console.log("Active status updated successfully!");
        } else {
            console.log("Invalid value for active status");
        }
    } else if (field === "hobbies") {
        if (Array.isArray(value)) {
            user.hobbies = value;
            console.log("Hobbies updated successfully!");
        } else {
            console.log("Invalid value for hobbies");
        }
    } else {
        console.log("Invalid field");
    }

    switch (field) {
        case "name":
            user.name = value;
            console.log("Name updated successfully using switch!");
            break;
        case "age":
            if (typeof value === "number") {
                user.age = value;
                console.log("Age updated successfully using switch!");
            } else {
                console.log("Invalid value for age using switch");
            }
            break;
        case "isActive":
            if (typeof value === "boolean") {
                user.isActive = value;
                console.log("Active status updated successfully using switch!");
            } else {
                console.log("Invalid value for active status using switch");
            }
            break;
        case "hobbies":
            if (Array.isArray(value)) {
                user.hobbies = value;
                console.log("Hobbies updated successfully using switch!");
            } else {
                console.log("Invalid value for hobbies using switch");
            }
            break;
        default:
            console.log("Invalid field using switch");
    }

    console.log("Updated user:", user);
}

function displayUser() {
    if (users.length == 0) {
        console.log("No users to display");
    }
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        console.log("user: " + [index + 1]);
        console.log("name: " + element.name);
        console.log("age: " + element.age);
        console.log("status: " + element.isActive);
        console.log("hobbies: " + element.hobbies);
    }
}

addUser("Alice Johnson", 30, true, ["painting", "traveling"]);
addUser("Bob Smith", 22, false, ["coding", "music"]);

updateUser("Alice Johnson", "age", 31);
updateUser("Bob Smith", "isActive", true);

displayUser();