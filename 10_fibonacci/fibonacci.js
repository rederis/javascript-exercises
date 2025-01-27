const fibonacci = function (n) {
    if (typeof n === "string") {
        n = Number(n);
    }
    if (n < 0) {
        return "OOPS";
    }
    if (n === 0) {
        return 0;
    }
    let prev = 0;
    let current = 1;
    for (let i = 1; i < n; i += 1) {
        let temp = current;
        current = prev + current;
        prev = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
