const removeFromArray = function(array, ...valuesToRemove) {
    array = array.filter((value) => !valuesToRemove.includes(value));

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
