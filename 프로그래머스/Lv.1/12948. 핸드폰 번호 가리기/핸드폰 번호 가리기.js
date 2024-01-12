function solution(phone_number) {
    if(phone_number.length ===11){
        for(let i=0;i<7;i++){
            phone_number = phone_number.replace(phone_number[i],'*')
        }
    }else{
        for(let j=0;j<phone_number.length-4;j++){
            phone_number = phone_number.replace(phone_number[j],'*')
        }
    }
    return phone_number
}