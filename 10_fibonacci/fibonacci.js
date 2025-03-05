const fibonacci = function(fiboNumber) {
    if (fiboNumber == 0) {
        return 0;
    } else if (fiboNumber < 0) {
        return 'OOPS';
    }

    let swapValue = null;
    let prevValue = 0;
    let value = 1;

    for (let i = 1; i < fiboNumber; i++) {
        swapValue = value;
        value += prevValue;
        prevValue = swapValue;
    }

    return value;
};

// Do not edit below this line
module.exports = fibonacci;
