function isPower(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 != 0){
            return false
        }
        n = n/2
    }
    return true
}

console.log(isPower(1));
console.log(isPower(2));
console.log(isPower(5));

// Big-O = O(logn)

function isPowerBitWise(n){
    if(n<1){
        return false
    }
    return (n& (n-1)) === 0
}
console.log(isPowerBitWise(1));
console.log(isPowerBitWise(2));
console.log(isPowerBitWise(5));
// Big-O = O(1)