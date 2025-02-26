const sumAll = function(first, second) {
    if (!isPosInt(first) || !isPosInt(second)) {
        return 'ERROR';
    }

    let highest, lowest;
    if (first > second) {
        highest = first;
        lowest = second;
    } else {
        highest = second;
        lowest = first;
    }

    // Gaus summation that supports start value higher than 1.
    const sum = (highest*(highest + 1))/2 - (lowest*(lowest - 1))/2

    return sum;
};


function isPosInt(value) {
    if (typeof value == 'number' && value > 0 && Number.isInteger(value)) {
        return true;
    }

    return false;
}

// Do not edit below this line
module.exports = sumAll;
