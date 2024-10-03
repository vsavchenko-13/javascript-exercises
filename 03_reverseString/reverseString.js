const reverseString = function(string) {
    let reverse =''
    for (let i = 0; i < string.length; i++){
        let char = string[string.length - 1 - i];
        reverse = reverse + char;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
