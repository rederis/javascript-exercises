const removeFromArray = function (original, ...args) {
    const result = [];
    for (let i = 0; i < original.length; i += 1) {
        if (args.indexOf(original[i]) === -1) {
            result.push(original[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
