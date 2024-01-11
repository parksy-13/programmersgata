function solution(absolutes, signs) {
    for(let i=0;i<signs.length;i++){
        if(signs[i]==true){
            continue;
        }else{
            absolutes[i]= -absolutes[i];
            continue;
        }
    }
    let sum = 0;
    for(let i=0;i<absolutes.length;i++){
        sum +=absolutes[i];
    }
    
    var answer = 123456789;
    return sum;
}