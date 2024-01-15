function solution(n) {
    // 빈 배열 생성
    let insertChr = [];
    
    // for문으로 홀수 인덱스에 '박', 짝수 인덱스에 '수' 삽입
    for(let i=0;i<n;i++){
        i%2 !==0? insertChr.push("박") : insertChr.push("수")
    }
    // 배열을 문자열로 전환 -> arr.join or toString()
    return insertChr.join('');
}