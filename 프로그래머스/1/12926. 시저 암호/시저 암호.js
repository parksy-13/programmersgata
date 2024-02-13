function solution(s, n) {
    let s2 = [];
    let s3 = [];
    
    for(let i=0;i<s.length;i++){
        let s2CharCode = s[i].charCodeAt();
        if(s[i]!==' '){
            s2.push(s2CharCode);
        }else{
            s2.push(s[i]);
        }
    }

    for(let j=0;j<s2.length;j++){
        if(s2[j]!==' '){
            if(s2[j]<91 && s2[j]+n>90){
                s3.push(String.fromCharCode(s2[j]+n-26));
            }else if(s2[j]>96&& s2[j]+n>122){
                s3.push(String.fromCharCode(s2[j]+n-26));
            }else{
                s3.push(String.fromCharCode(s2[j]+n));
            }
    }else{
        s3.push(s2[j]);
    }
    }
    let answer1 = s3.join('');
    return answer1;
}
