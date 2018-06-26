/*Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?*/

var findDuplicates = function(nums) {
    let array = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[Math.abs(nums[i])-1] < 0){
            array.push(Math.abs(nums[i]));
        }else{
            nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1]
        }
    }
    return array;
};
