function solution(x) {
    const x2 = x;
    let nums = 0;
    while(x>=1){
        nums+=x%10;
        x=Math.floor(x/10);
    }
    if(x2%nums===0){
        return true;
    }else{
        return false;
    }
}