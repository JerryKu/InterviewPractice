/* Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem. */

var sortColors = function(nums) {
    let lastZ = 0;
    let firstT = nums.length - 1;
    for(let i = 0; i < nums.length; i++){
        while(nums[i] !== 1){
            if(i > firstT) {
                break;
            }
            if(nums[i] === 0){
                swap(i, lastZ, firstT, nums);
                lastZ++;
                i++;
            }else if(nums[i] === 2){
                swap(i, lastZ, firstT, nums);
                firstT--;
            }
        }
    }
};
var swap = function(index, lastZ, firstT, nums){
    if(nums[index] === 0){
        let temp = nums[index];
        nums[index] = nums[lastZ];
        nums[lastZ] = temp;
    }else if(nums[index] === 2){
        let temp = nums[index];
        nums[index] = nums[firstT];
        nums[firstT] = temp;
    }
}
