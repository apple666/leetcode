/**
*题目：
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
例如
input:nums = [2, 7, 11, 15], target = 9
output:[0, 1]
*
*/
//方法一：暴力法
var twoSum = function(nums, target) {
    if(!nums||!nums.length){
        return []
    }
    var len = nums.length
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return []
};
//方法二：先排序再双指针遍历

//方法三：哈希
var twoSum = function(nums, target) {
    if(!nums||!nums.length){
        return []
    }
    var len = nums.length
    var map = {}
    for(let i=0;i<len;i++){
        if(map[target-nums[i]]!==undefined){
            return [map[target-nums[i]],i]
        }
		map[nums[i]] = i//这里顺序必须在后
    }
    return []
};