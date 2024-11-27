// ============ SLEEP DEBT ===========

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const rand = getRandomInt(4, 16);


const getSleepHours = day => {

    switch (day.toLowerCase()) {
        case 'monday':
            return rand;
            break;
        case 'tuesday':
            return rand;
            break;
        case 'wednesday':
            return rand;
            break;
        case 'thuesday':
            return rand;
            break;
        case 'friday':
            return rand;
            break;
        case 'saturday':
            return rand;
            break;
        case 'sunday':
            return rand;
            break;
        default:
            console.log('Wrong input!!!');
    }
}

// console.log(getSleepHours('Monday'));
// console.log(getSleepHours('Tuesday'));
// console.log(getSleepHours('Wednesday'));
// console.log(getSleepHours('Thuesday'));
// console.log(getSleepHours('Friday'));
// console.log(getSleepHours('Saturday'));
// console.log(getSleepHours('Sunday'));

const getActualSleepHours = _ => {
    let sumOfSleepHours = 0;
    // sumOfSleepHours += getSleepHours('Monday');
    // sumOfSleepHours += getSleepHours('Tuesday');
    // sumOfSleepHours += getSleepHours('Wednesday');
    // sumOfSleepHours += getSleepHours('Thuesday');
    // sumOfSleepHours += getSleepHours('Friday');
    // sumOfSleepHours += getSleepHours('Saturday');
    // sumOfSleepHours += getSleepHours('Sunday');

    // without calling getSleepHours() function
    sumOfSleepHours += rand;
    sumOfSleepHours += rand;
    sumOfSleepHours += rand;
    sumOfSleepHours += rand;
    sumOfSleepHours += rand;
    sumOfSleepHours += rand;
    sumOfSleepHours += rand;

    return sumOfSleepHours;
}

// console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => {
    return idealHours * 7;
}

// console.log(getIdealSleepHours());


// If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
const calculateSleepDebt = _ => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(12);
    if(actualSleepHours === idealSleepHours) {
        console.log(`This week you slept ${actualSleepHours} hours your goal is ${idealSleepHours} hours.`);
        console.log('You got perfect amount of sleep this week!!! BRAVOO!!!!');
    }
    if(actualSleepHours > idealSleepHours) {
        console.log(`This week you slept ${actualSleepHours} hours your goal is ${idealSleepHours} hours.`);
        console.log(`You slept ${actualSleepHours - idealSleepHours} hours more than your goal is.`);
        console.log('You got more sleep then you need... Lazy guy!!');
    }
    if (actualSleepHours < idealSleepHours) {
        console.log(`This week you slept ${actualSleepHours} hours your goal is ${idealSleepHours} hours.`);
        console.log(`You slept ${idealSleepHours - actualSleepHours} hours less than your goal is.`);
        console.log('You should get some rest BROTHER!!!!!!!!!!');
    }
}

calculateSleepDebt();