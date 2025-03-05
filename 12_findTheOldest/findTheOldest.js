const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const oldestPersonAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const personAge = calculateAge(person.yearOfBirth, person.yearOfDeath);

        return personAge > oldestPersonAge ? person : oldestPerson;
    })
};

function calculateAge(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }

    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
