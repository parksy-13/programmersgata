function solution(s) {
    if(s.length===4 || s.length ===6){
        for(let i=0;i<s.length;i++){
            let answer = parseInt(s[i]);
            if(isNaN(answer)){
                return false;
            }
        }return true;
    }else{
        return false;
    }
}