// Brute force approach

let ar = [2,4,6,1,-2,9,0]
// length = 7
let p =3
let n = ar.length;
let maxSum = 0;
let i =0;

while(i< n-p){
    let j =i;
    let sum =0;
    while(j < i+p){
        sum = sum + ar[j]
        j++
    }
    i++;
    maxSum = Math.max(sum, maxSum);
}
console.log(maxSum);