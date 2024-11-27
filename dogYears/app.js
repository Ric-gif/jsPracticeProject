// ========== DOG YEARS ==========

// My age
const myAge = 27;

// first 2 will change
let earlyYears = 2;

// The first two years of a dog’s life count as 10.5 dog years each.
earlyYears *= 10.5;

// after 2 years
// let laterYears = myAge - 2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 
// laterYears *= 4;

// Without *=
let laterYears = (myAge - 2) * 4;


// Test
console.log(earlyYears, laterYears);

// My age in dog years calculation
const myAgeInDogYears = earlyYears + laterYears;

// My name in lowerCase only
const myName = 'Ricardas'.toLowerCase();

// Output
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

