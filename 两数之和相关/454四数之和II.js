/**
*题目：
给定四个相同长度的数组A，B，C，D，找出(i,j,k,l)使得
A[i]+B[j]+C[k]+D[l]=0
例如
input:A = [ 1, 2],B = [-2,-1],C = [-1, 2],D = [ 0, 2]
output:2
[
  [0, 0, 0, 1]
  [1, 1, 0, 0]
]
*/
//解法一：暴力法,果断超时
var fourSumCount = function(A, B, C, D) {
    if(!A||!B||!C||!D){
        return []
    }
    let len = A.length
    if(B.length!=len||C.length!=len||D.length!=len){
        return []
    }
    let num = 0
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            for(let k=0;k<len;k++){
                for(let l=0;l<len;l++){
                    if(A[i]+B[j]+C[k]+D[l]===0){
                        num++
                    }
                }
            }
        }
    }
    return num
};
//解决二：三次循环暴力法+hash,还是超时
var fourSumCount = function(A, B, C, D) {
    if(!A||!B||!C||!D){
        return []
    }
    let len = A.length
    if(B.length!=len||C.length!=len||D.length!=len){
        return []
    }
    let num = 0
    let hash = {}
    D.forEach((item,index)=>{
        let tmp = hash[item]||[]
        tmp.push(index)
        hash[item] = tmp
    })
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            for(let k=0;k<len;k++){
                let array = hash[0-A[i]-B[j]-C[k]]
                if(array){
                    num+=array.length
                }
            }
        }
    }
    return num
};
//解决三:纯粹的hash
var fourSumCount = function(A, B, C, D) {
    if(!A||!B||!C||!D){
        return []
    }
    let len = A.length
    if(B.length!=len||C.length!=len||D.length!=len){
        return []
    }
    let ABHash = {}
    let CDHash = {}
    //构建hash
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            let ab = A[i]+B[j]
            let cd = C[i]+D[j]
            ABHash[ab] = ABHash[ab]?ABHash[ab]+1:1
            CDHash[cd] = CDHash[cd]?CDHash[cd]+1:1
        }
    }
    //计算总和
    let num = 0
    for(let key in ABHash){
		let t = -parseInt(key)
        if(CDHash[t]){
            num = num+ABHash[key]*CDHash[t]
        }
    }
    return num
};
