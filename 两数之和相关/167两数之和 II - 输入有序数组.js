/**
*题目：
给定一个升序的有序数组，找两个数使得相加之和等于目标数。
例如
input:numbers = [2, 7, 11, 15], target = 9
output:[1,2]
[
  [0, 0, 0, 1]
  [1, 1, 0, 0]
]
*/
//解决一：暴力法,懒得试了
//解法二：双指针
var twoSum = function(numbers, target) {
    if(!numbers||numbers.length<2){
        return []
    }
    let start = 0,end = numbers.length-1
    while(start<end){
        let sum = numbers[start]+numbers[end]
        if(sum===target){
            return [start+1,end+1]
        }
        else if(sum>target){
            end--
        }
        else{
            start++
        }
    }
    return []
};
//解法三：双指针+二分,速度没变快你敢信？
var twoSum = function(numbers, target) {
    if(!numbers||numbers.length<2){
        return []
    }
    bSearch = function(data,start,end,target){
        while(start<=end){
            let m = parseInt((start+end)/2)
            if(data[m]===target){
                return m
            }
            else if(data[m]<target){
                start = m+1
            }
            else{
                end = m-1
            }
        }
        return -1
    }
    let l = numbers.length
    for (let i = 0; i < l; i++) {
        let index = bSearch(numbers,i+1,l-1,target-numbers[i])
        if(index>=0){
            return [i+1,index+1]
        }
    }
    return 
};
//解法四：用两数之和一模一样的hash方法