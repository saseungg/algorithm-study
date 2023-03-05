//약수의 개수와 덧셈: https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let sum = 0;
  
  for (let i = left; i <= right; i++) {
    let count;
    for (let j = 1; j <= i; j++) { // 1부터 i까지 돌면서 약수개수 구하기
      if (i % j === 0) {
        count++;
      }
    }
    count % 2 === 0 ? (sum += i) : (sum -= i); // 약수개수가 짝수면 sum에다가 더해주고 그렇지 않으면 빼주기
  }
  return sum;
}

console.log(solution(13, 17));

// 풀이를 안보고 풀긴했는데 구조를 완벽히 이해하고 풀었다기보단 디버깅을 하면서 여러코드를 넣어보고 해결되면 끝~ 이런식으로 풀어서 좀 아쉬웠다.

