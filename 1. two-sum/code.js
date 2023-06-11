/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let i=0;
    let j=1;
    while(nums[i]+nums[j]!=target){
        if(j<nums.length-1){
            j++;
        }
        else if(j==nums.length-1){
            j=1;
            i++;
            if(j==i) j++;
        }
    }
    if(j==i) j++;
    result.push(i);

    result.push(j);
    return result;
};

console.log(twoSum([2,1,9,4,4,56,90,3], 8))