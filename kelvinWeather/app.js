
// kelvin will stay constant
const kelvin = 0;

// celsius conversion
const celsius = kelvin - 273;

// fahrenheit conversion
let fahrenheit = celsius * (9 / 5) + 32;

// Rounding decimal number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//===================================== Extra with Newton =====================================

// Newton conversion
let newton = celsius * (33 / 100);

// Rounding
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees in Newton.`);