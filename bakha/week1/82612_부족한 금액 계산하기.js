// [PGR] 부족한 금액 계산하기/ lv.1 / 8분
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    var answer;
    let cost = 0
    for(i = 1; i <= count; i++) cost += price * i;
    let changes = money - cost;
    answer = changes;
    if(changes < 0) answer = Math.abs(changes);
    return answer;
}

//풀이시간 8m25s