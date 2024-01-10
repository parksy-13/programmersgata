function solution(num) {
    let count=0;
    while(count<500){
        if(num%2===0){
            num/=2;
            count+=1;
            continue;
        }else if(num%2 !==0 && num !==1){
            num=num*3+1;
            count+=1;
            continue;
        }else if(num===1){
            return count;
            break;
        }
    }return -1;
}