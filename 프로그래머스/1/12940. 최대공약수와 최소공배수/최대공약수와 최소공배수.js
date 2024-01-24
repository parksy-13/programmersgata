function solution(n, m) {
    let max = 1;
    let min = 1;
    let maxArr = [];
    let answer = [];
    n>=m? min = n: min = m;
    {if(min = n){
        for(let i =1;i<=m;i++){
            if(n%i===0 && m%i===0){
                maxArr.push(i);
            }
        }
    }else{
        for(let i = 1;i<=n;i++){
            if(n%i===0 && m%i===0){
                maxArr.push(i);
             }
        }
    }
    }
    for(let i = min;i<=1000000;i++){
        if(i%n===0 && i%m===0){
            min = i;
            break;
        }
    }
    answer.push(maxArr[maxArr.length-1]);
    answer.push(min);
    return answer;
}