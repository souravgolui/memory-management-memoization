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