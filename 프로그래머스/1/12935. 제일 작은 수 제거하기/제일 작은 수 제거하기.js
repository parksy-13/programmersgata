function solution(arr) {
    let answer = [];
    if(arr.length<2){
        answer = [-1];
        return answer;
    }else{
        let min = arr[0];
        for(let i=0;i<arr.length;i++){
            if(min>arr[i]){
                min = arr[i];
            }
        }
        const idx = arr.indexOf(min);
        answer = arr.splice(idx,1);
        return arr;
    }
}