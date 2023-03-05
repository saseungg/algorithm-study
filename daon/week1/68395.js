//3진법 뒤집기: https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

/* 
[손코딩]
10법을 3진법으로 변환해서 배열에 담아주고 메소드를 써서 뒤집은후 그걸 다시 10진법으로 변환 */
