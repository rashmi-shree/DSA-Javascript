function prime(n){
    if(n<2){
        return false;
    }
    for (let i =2 ; i<n ;i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

console.log(prime(5));
console.log(prime(4));

// Big-O = O(n)

function optimalPrime(n){
    if(n<2){
        return false;
    }
    for(let i =2; i<Math.sqrt(n); i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

console.log(optimalPrime(5));
// Big-O = O(sqrt(n))