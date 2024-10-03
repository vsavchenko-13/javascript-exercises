const sumAll = function (min, max) {
    let sum = 0;


    if (Number.isInteger(min) && Number.isInteger(max) && min >= 0 && max >= 0) {
        if (min < max) {
            for (let i = min; i <= max; i++) {
                sum = sum + i;
            }
        } else if (min > max) {
            for (let i = max; i <= min; i++) {
                sum = sum + i;
            }
        }
    }
    else {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
