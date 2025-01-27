const findTheOldest = function (people) {
    return people.reduce((prev, current) => {
        if (getAge(prev) > getAge(current)) {
            return prev;
        }
        return current;
    })

};

const getAge = (person) => {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
