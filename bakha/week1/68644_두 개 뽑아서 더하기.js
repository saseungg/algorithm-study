// [PRG] 두 개 뽑아서 더하기 / lv1 /  12분
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    let answer;
    let totalArray = [];
    for(i = 0; i < numbers.length; i++){
        for(j = 0; j < numbers.length; j++){
            if(i !== j) totalArray.push(numbers[i] + numbers[j]);
        }
    }
    let uniqueArray = new Set(totalArray.sort((a,b) => a-b));
    answer = [...uniqueArray];
    return answer;
}