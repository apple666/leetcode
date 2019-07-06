/**
*题目：
给定n维数组num，和一个整数target,判断nums中是否存在四个数使得a+b+c+d=target
找出所有的不重复四元组
例如
input: nums = [1, 0, -1, 0, -2, 2], target = 0
output:[
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
]
*/
//方法一：暴力，居然过了
var fourSum = function(nums, target) {
    if(!nums||nums.length<4){
        return[]
    }
    let len  =nums.length
    let map = {}
    let result = []
    for (let i = 0; i < len-3; i++) {
        for(let j=i+1;j<len-2;j++){
            for(let k=j+1;k<len-1;k++){
                for(let l=k+1;l<len;l++){
                    if(nums[i]+nums[j]+nums[k]+nums[l]===target){
                        let tmp = [nums[i],nums[j],nums[k],nums[l]]
                        tmp.sort((a,b)=>a-b)
                        let key = tmp.join(",")
                        if(!map[key]){
                            map[key] = true
                            result.push(tmp)
                        }
                    }
                }    
            }
        }
    }
    return result
};
//方法二：暴力+hash
var fourSum = function(nums, target) {
    if(!nums||nums.length<4){
        return[]
    }
    let len  =nums.length
    let map = {}
    let hash = {}
    nums.forEach((item,index)=>{
        hash[item] = index
    })
    let result = []
    for (let i = 0; i < len-2; i++) {
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                let remain = target-nums[i]-nums[j]-nums[k]
                let index = hash[remain]
                if(!isNaN(index)&&index!==i&&index!=j&&index!=k){
                    let tmp = [nums[i],nums[j],nums[k],nums[index]]
                    tmp.sort((a,b)=>a-b)
                    let key = tmp.join(",")
                    if(!map[key]){
                        map[key] = true
                        result.push(tmp)
                    }
                }
            }
        }
    }
    return result
};
//方法三：hash+双指针+剪枝(hash可以换为二分查找)
var fourSum = function(nums, target) {
    if(!nums||nums.length<4){
        return[]
    }
    let data = JSON.parse(JSON.stringify(nums))
    data.sort((a,b)=>a-b)
    let len  =data.length
    let map = {}
    let result = []
    for (let i = 0; i < len-3; i++) {
        if (i > 0&&data[i] == data[i-1]){
            continue
        }
        for(let j=i+1;j<len-2;j++){
            if(data[i]+data[j]+data[j+1]+data[j+2]>target){
                break
            }
            if(data[i]+data[j]+data[len-1]+data[len-2]<target){
                continue
            }
            let start = j+1
            let end = len-1
            while(start<end){
                let sum = data[i]+data[j]+data[start]+data[end]
                if(sum<target){
                    start++
                }
                else if(sum>target){
                    end--
                }
                else{
                    let tmp = [data[i],data[j],data[start],data[end]]
                    tmp.sort((a,b)=>a-b)
                    let key = tmp.join(",")
                    if(!map[key]){
                        map[key] = true
                        result.push(tmp)
                    }
                    start++
                    end--
                }
            }
        }
    }
    return result
};