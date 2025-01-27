const palindromes = function (string) {
    const filtered = string.toLowerCase().split("").filter((char) => /[0-9A-Z]/i.test(char)).join("");
    const reversed = filtered.split("").reverse("").join("");
    return reversed === filtered;
};


// Do not edit below this line
module.exports = palindromes;
