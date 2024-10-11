const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (let i = 1; i < num; i ++){
        sum = 0;
        sum = a + b;
        a = b;
        b = sum;
    }
    console.log(sum);
    return sum;
};

fibonacci(4);

// Do not edit below this line
//module.exports = fibonacci;
