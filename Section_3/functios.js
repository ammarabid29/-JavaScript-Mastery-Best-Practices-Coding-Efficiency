
function calculateSum(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return "Ivalid input values! Enter numerical values.";
    }
    if (start > end) {
        return "Ivalid input range! Start value should be less than or equal to end value.";
    }
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += index;
    }
    return sum;
}
let result = calculateSum(1, 5);
console.log(result);