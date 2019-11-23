/**
 * @description simple way
 * @param {number} n is a input
 */
function prinValue(n) {
    let result = 0;
    for (let i= 0; i<=n; i++) {
        for (let j=0; j<=n; j++) {
             result += 1;
        }
    }
    return result;
}

console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));


///////////////////////////////////////////////////////////////////////////


/**
 * @description advanced and optimized way
 * @param {number} n is input 
 * @var {array} prevValue store previous calculated value 
 */
const prevValue = [];
function printVal(n) {
    if( prevValue[n] != null) {
        return prevValue[n];
    }

    let result = 0;
    for (let i= 0; i<=n; i++) {
        for (let j=0; j<=n; j++) {
             result += 1;
        }
    }

    prevValue[n] = result;
    return result;
}

console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));
console.log(printVal(500));