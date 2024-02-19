//function has no return but accept text as input and print the concatenated string
exports.welcomeMessage = (firstName, lastName) => {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
};


//function returns a double value for converting a measurement unit
exports.convertMeasurement = (initialValue, unit) => {
    if (unit.toLowerCase() === "celsius") {
        return (initialValue * 9/5) + 32;  // Celsius to Fahrenheit
    } else if (unit.toLowerCase() === "fahrenheit") {
        return (initialValue - 32) * 5/9;  // Fahrenheit to Celsius
    } else if (unit.toLowerCase() === "minutes") {
        return initialValue / 60;  // Minutes to Hours
    } else if (unit.toLowerCase() === "hours") {
        return initialValue * 60;  // Hours to Minutes
    } else {
        return null;  // Invalid unit
    }
};

//function uses math formula after accepting one or more argument and then return the result
const factorial = (n) => {
    return (n === 0 || n === 1) ? 1 : n*factorial(n-1);
};
exports.calculateFactorial = factorial;

//advanced function 
exports.calculateCircleArea = (radius) => Math.PI * Math.pow(radius, 2);


