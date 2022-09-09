const ps = require("prompt-sync");
const prompt = ps();

function LeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log('Leap year');
    } 
    else {
        console.log('Not leap year');
    }
}

const y = parseInt(prompt('Enter a year:'));
LeapYear(y);
