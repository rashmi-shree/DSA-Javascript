//Brute force approach
// expected output = [3,3,5,5,6,7]
let nums = [1,3,-1,-3,5,3,6,7]
let k =3;

const MaxSlidingWindowNaive = function (nums, k){
    const result = [];
    const n = nums.length;

    for (let i =0; i<n-k ;i++){
        let max = nums[i]
        for (j = 1 ; j<k ; j++){
            if (nums[i+j]> max){
                max = nums[i+j]
            }
        }
        result.push(max);
    }
    return result;
}
console.log(MaxSlidingWindowNaive(nums, k))

// time complexity  = O(n*2)
// space complexity = O(n)