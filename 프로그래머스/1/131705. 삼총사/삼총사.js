function solution(number) {
    //for문 2개
    //뽑은 세수의 합이 0일 때 count +1
    let count = 0;
    for(let i=0;i<number.length-2;i++){
        for(let j=i+1;j<number.length-1;j++){
            for(let k=j+1;k<number.length && k>j;k++){
                if(number[i]+number[j]+number[k]===0){
                    count+=1;
                }
            }
        }
    }
    return count;
}