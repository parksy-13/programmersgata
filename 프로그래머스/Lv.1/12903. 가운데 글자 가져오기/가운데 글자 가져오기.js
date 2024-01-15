function solution(s) {
    let midNum = Math.floor(s.length/2);
    if(s.length%2===0){
        return s[midNum-1]+s[midNum];
        
    }else{
        return s[midNum];
    }
}