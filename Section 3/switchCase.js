let vehileType;
let vehicleCategory = "MoterCycle";

switch (vehicleCategory) {
    case "Car":
        vehileType = "Sedan";
        break;
    case "MoterCycle":
        vehileType = "Sports Bike";
        break;
    case "Truck":
        vehileType = "Pickup";
        break;
    default:
        vehileType = "Unknown";
        break;
}
console.log(`The vehicle is a ${vehileType}`);