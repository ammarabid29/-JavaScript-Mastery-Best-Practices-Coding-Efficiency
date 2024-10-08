function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
let tempInCelsius = 25;
let tempInFahrenheit = celsiusToFahrenheit(tempInCelsius);
console.log(tempInCelsius + "C is" + tempInFahrenheit + "F");

function fahrenheitToCelsius(farenheit) {
    return ((farenheit - 32) * 5) / 9;
}
tempInCelsius = fahrenheitToCelsius(tempInFahrenheit);
console.log(tempInFahrenheit + "F is" + tempInCelsius + "C");
