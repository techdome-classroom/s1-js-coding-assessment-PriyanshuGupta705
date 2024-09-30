// program2.js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.length === 0) return 0; // Handle empty string

    const romanMap = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100, D: 500, M: 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        if (nextVal > currentVal) {
            total -= currentVal; // Subtract if next value is greater
        } else {
            total += currentVal; // Add otherwise
        }
    }
    return total;
};

module.exports = { romanToInt }; // Ensure it's exported