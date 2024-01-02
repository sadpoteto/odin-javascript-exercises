const leapYears = function(year) {
    return (year % 4 == 0) && !( (year % 100 == 0) && (year % 400 != 0));
};
// divisible by 4 AND NOT a non-400-multiple century

// Do not edit below this line
module.exports = leapYears;
