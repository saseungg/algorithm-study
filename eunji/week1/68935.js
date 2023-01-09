//3진법 뒤집기(https://school.programmers.co.kr/learn/courses/30/lessons/68935)
//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = n.toString(3);
  answer = answer.split("").reverse().join("");
  answer = parseInt(answer, 3);
  return answer;
}
console.log(solution(45));

/*
[손코딩]
1. n을 3진법으로 변환 : 숫자.toString(3)
2. 그걸 앞뒤로 뒤집기 : 배열의 문자열.reverse
3. 그걸 다시 10진법 : 숫자.toString()

[다른사람 풀이]
return parseInt(n.toString(3).split('').reverse().join(''), 3);

-> 좀더 풀어서 쓰면
n = n.toString(3).split('').reverse().join('')
return parseInt(n, 3)
*/
