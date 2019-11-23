
/**
 * @description simple way
 * @param {number} n is a input
 */
function fiv(n) {
    if(n <= 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n - 2);
    }
}
console.log(51); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @description advanced and optimized way
 * @param {number} n is input 
 */
function fiv(n, prevValues = []) {

    if(prevValues[n] != null) {
        return prevValues[n];
    }

    let result
    if(n <= 2) {
        result = 1
    } else {
        result = fib(n-1, prevValues) + fib(n - 2, prevValues)
    }

    prevValues[n] = result
    return result

}

console.log(fiv(45)); // it will print 10x faster than previous one