const repeatString = function(string, times) {
    if (times < 0) {
        return 'ERROR';
    }

    let repeatString = '';
    for (let i = 0; i < times; i++) {
        repeatString += string;
    }

    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
