const palindromes = function (string) {
    let array = string.split(" ");
    if (array.length == 1) {
        let word = array[0].split('').reverse().join('');
        if (word != string) {
            return false;
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            let word = array[i].split('').reverse().join('');
            if (word != array[array.length - i]) {
                return false;
            }
        }
    } return true;
}

let string = "what about this";
if (palindromes(string)) {
    console.log("this is palindrome")
};

// Do not edit below this line
module.exports = palindromes;
