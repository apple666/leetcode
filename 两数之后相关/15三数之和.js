/**
*题目：
给定n维数组num，判断nums中是否存在三个元素使得a+b+c=0
找出所有的不重复三元组
例如
input:nums = [-1, 0, 1, 2, -1, -4]
output:[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
//方法一：暴力,时间太长，直接吃屎
var threeSum = function(nums) {
    if(!nums||nums.length<3){
        return []
    }
    let result = []
	let map = {}
    let len = nums.length
    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                if(nums[i]+nums[j]+nums[k]===0){
                    let tmp = []
					tmp.push(nums[i],nums[j],nums[k])
					tmp.sort()
					let key = tmp.toString()
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
//方法二：暴力+hash（第三重循环使用hash查找），依然吃屎
var threeSum = function(nums) {
    if(!nums||nums.length<3){
        return []
    }
    let result = []
	let map = {}
    let len = nums.length
	let hash = {}
	nums.forEach((item,index)=>{
		let tmp = hash[item]||[]
		tmp.push(index)
		hash[item] = tmp
	})
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
			let t = 0-nums[i]-nums[j]
            if(hash[t]&&hash[t].find(item=>item!==i&&item!==j)){
				let tmp = []
				tmp.push(nums[i],nums[j],t)
				tmp.sort()
				let key = tmp.toString()
				if(!map[key]){
					map[key] = true
					result.push(tmp)
				}
			}
        }
    }
    return result
};
//方法三：排序+双指针+特定条件优化
var threeSum = function(nums) {
    if(!nums||nums.length<3){
        return []
    }
	let data = JSON.parse(JSON.stringify(nums))
	data.sort((a,b)=>a-b)
	let result = []
	let map = {}
	let len = data.length
	for(let i=0;i<len-2;i++){
		//特定条件优化
		if(data[i]>0){
			break
		}
		if(i&&data[i]===data[i-1]){
			continue
		}
		//双指针
		let start = i+1
		let end = len-1
		while(start<end){
			let sum = data[i]+data[start]+data[end]
			if(sum===0){
				let tmp = []
				tmp.push(data[i],data[start],data[end])
				let key = tmp.toString()
				if(!map[key]){
					map[key] = tmp
					result.push(tmp)
				}
				end--
			}
			else if(sum<0){
				start++
			}
			else{
				end--
			}
		}
	}
	return result
};