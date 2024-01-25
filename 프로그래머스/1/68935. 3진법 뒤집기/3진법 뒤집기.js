function solution(n) {
    let result = [];
    //3으로 계속해서 나누기(몫을 정수로 전환 후 나머지들을 push로 result에 모으기), 마지막 n도 push
    while(n>=3){
        result.push(n%3);
        n = parseInt(n/3);
        }
    result.push(n);
    //앞에서부터 3*(result.length-i-1) 곱한 후 answer에 더하기
    let answer = 0;
    for(let i=0;i<result.length;i++){
        answer += result[i]*3**(result.length -i -1);
    }
    return answer;
}