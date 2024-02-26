function solution(numbers) {
    //두 수씩 합한 결과들을 배열로 모음
    //배열 오름차순
    let sums=[];
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            sums.push(numbers[i]+numbers[j]);
        }
    }
    let answer = sums.filter((e,i)=>{
        return sums.indexOf(e)===i;
    })
    answer.sort((a,b)=>{return a-b})
    return answer;
}