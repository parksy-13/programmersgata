function solution(array, commands) {
    //for문 안에 넣기
    //배열 slice
    //자른 배열 정렬
    //인덱스 찾기
    let answer=[];
    let result = [];
    for(let a=0;a<commands.length;a++){
        answer = array.slice((commands[a][0]-1),(commands[a][1])).sort((x,y)=>x-y)  
        result.push(answer[commands[a][2]-1]);
    }
    return result;
}