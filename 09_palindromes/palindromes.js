const palindromes = function (string) {
    let palindrome = false;
    let array = string.replace(",", "").split(" ");
    //check reversed string vs last array object
    for (let i = 0; i < array.length; i ++){
        if (array[i].split("").reverse().join("") != array[string.length - i]){
            return false;
        }  else {
            palindrome = true;
        }  
    }
    return palindrome;
};

let word = "racecar";

palindromes(word);

// Do not edit below this line
module.exports = palindromes;
