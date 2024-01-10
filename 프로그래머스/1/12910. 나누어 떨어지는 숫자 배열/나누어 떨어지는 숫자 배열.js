function solution(arr, divisor) {
    let nums=[];
    let answer=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor===0){
            nums.push(arr[i]);
        }
    }
    if(nums.length===0){
        nums.push(-1);
        return nums;
    }else{
        nums.sort((a, b) => a - b);
        return nums;
    }
}