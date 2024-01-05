function solution(n) {
    var answer = [];
    do{
        answer.push(n%10);
        n=parseInt(n/10);
    }while(
    n>=1
    )
    return answer;
}