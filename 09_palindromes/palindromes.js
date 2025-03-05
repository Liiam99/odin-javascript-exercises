const palindromes = function (string) {
    const arr = string.toLowerCase().split('');
    const filteredArr = arr.filter((character) => isValidCharacter(character));

    const cleanedString = filteredArr.join('');
    const reverseString = filteredArr.reverse().join('');

    return reverseString === cleanedString;
};

function isValidCharacter(character) {
    const isDigit = character >= '0' && character <= '9';
    const isLetter = character >= 'a' && character <= 'z';

    return isDigit || isLetter ? true : false;
}

// Do not edit below this line
module.exports = palindromes;
