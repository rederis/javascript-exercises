const sumAll = function (start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }
    let result = 0;
    for (let i = start; i <= end; i += 1) {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
