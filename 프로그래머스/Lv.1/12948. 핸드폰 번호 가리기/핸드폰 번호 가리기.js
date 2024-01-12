function solution(phone_number) {
        for(let j=0;j<phone_number.length-4;j++){
            phone_number = phone_number.replace(phone_number[j],'*')
        }return phone_number
}
