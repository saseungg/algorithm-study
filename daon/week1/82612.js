//부족한 금액 계산하기: https://school.programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solution(price, money, count) {
  let sum = 0;
  let answer = 0;

  for (let i = 1; i <= count; i++) { // count만큼 반복하여 총 이용료값을 sum에 담아줌
    sum += price * i;
  }

  answer = sum - money; // 총 이용료값에서 money를 뺀 값이 0보다 크면 answer를 리턴하고 그렇지 않다면 0을 반환
  return answer > 0 ? answer : 0;
}

console.log(solution(3, 20, 4));
