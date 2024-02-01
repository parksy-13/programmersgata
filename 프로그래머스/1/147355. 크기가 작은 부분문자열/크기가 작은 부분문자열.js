function solution(t, p) {
    let count = 0;
    //문자열로 바꾸기
    let t2 = t.toString();
    let p2 = p.toString();
    //p2.length만큼 t2 자른 후 배열에 결과 넣기
    let answers = [];
    for(let i=0;i<t2.length-p2.length+1;i++){
        answers.push(t2.substr(i,p2.length));
    }
    console.log(answers);
    //배열의 문자열들 정수형으로 바꾼 후 p보다 작거나 같은 수 있을 때마다 count +1
    for(let j=0;j<answers.length;j++){
        let answer = parseInt(answers[j]);
        if(answer<=p){
            count +=1;
        }
    }
    return count;
}