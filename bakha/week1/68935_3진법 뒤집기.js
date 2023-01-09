// [PRG] 3진법 뒤집기 / lv1 / 18분

function solution(n) {
    let answer;
    let ternary = n.toString(3)
    let reversed = ternary.split('').reverse().join('')
    let decimal = parseInt(reversed, 10 / 3)
    answer = decimal
    return answer
}

//풀이시간 18분 3진법 뒤집기이후 10진수로 변환해서 7이 나오는 방법 찾느라 10분은 찾은듯
//0021을 10진수로 변환하면 21고대로 나오길래 6번 라인에서 메소드들 적용될 때 자동으로
//10진법으로 변환되었구나싶어서 그냥 3으로 나눠줌 주석 달면서 보니 마지막 parseInt는 의미없고
//나누기 3만 하면 되는 문제였던듯싶다. 애초에 진법에 대한 개념자체가 없어서 이해 안되는 문제..