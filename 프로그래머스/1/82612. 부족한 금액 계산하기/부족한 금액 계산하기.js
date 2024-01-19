function solution(price, money, count) {
    let priceSum=0;
    // 이용료의 합
    for(let i=1;i<=count;i++){
        priceSum+=price*i;
    }
    //money에서 빼고 if 조건문으로 돈이 음수가 아니라면 0 return
    if(money>priceSum){
        return 0
    }else{
        return priceSum - money
    }
}