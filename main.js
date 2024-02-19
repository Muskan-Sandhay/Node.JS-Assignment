let myUtility=require('./utility');
//function has no return but accept text as input and print the concatenated string
myUtility.welcomeMessage("Jungkook", "Jeon");
//function returns a double value for converting a measurement unit
console.log(myUtility.convertMeasurement(10, "celsius")); 
//advanced function 
console.log(myUtility.calculateCircleArea(5));
//function uses math formula after accepting one or more argument and then return the result
console.log(myUtility.calculateFactorial(4));

