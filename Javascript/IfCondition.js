function basicIfCondition() {
    if (5 > 10) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}

/**
 * This function checks whether X is greater than Y.
 * It will pront the result to the console.
 */
function Test1() {
    const x = 10;
    const y = 10;
    if (x > y) {
        console.log('X is greater than Y');
    }
    else if( x < y) {
        console.log('Y is greater than X');
    }
    else {
        console.log('X is equal to Y');
    }
}

function CheckWeekend() {
    const day = 'Sunday';
    if (day == 'Saturday' && day == 'Sunday') {
        console.log('It is the weekend!');
    }
    else {
        console.log('It is a weekday.');
    }
}
CheckWeekend();
